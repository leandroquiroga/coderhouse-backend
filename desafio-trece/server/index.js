const { createServer } = require('http');
const path = require('path');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io');
const router = require('../router');
const session = require('express-session');
const passport = require('passport');

const passportConfig = require('../configuration/passport.config');
const socketControllers = require('../controllers/socketControllers');
const dbConnect = require('../database/database.connect');
const { pageNotExist, errorServer } = require('../middlewares');
const cluster = require('cluster');

// Condicion que devuelve true en la primera ejecucion
if (cluster.isMater) {
    // Recorre cada uno de las CPUs y los forkea
    for (let i = 0; i < numCPUs; i++){
      cluster.fork();
    };

    // Escucha el evento para saber si se cae o no
    cluster.on('exit', function() {
      console.log('Process:', process.pid + ' has been failded');
    });
  return
};

const app = express();
const server = createServer(app);
const socket = new Socket(server);

dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(passportConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use('/v1', router);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname + './../views'));
socket.on('connection', socketControllers);

app.use(pageNotExist);
app.use(errorServer);

module.exports = server;