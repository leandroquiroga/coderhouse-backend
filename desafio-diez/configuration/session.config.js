const MongoStore = require("connect-mongo");
const { envieroment } = require("./envieroment");


const sessionConfig = {
  store: MongoStore.create({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    mongoUrl: envieroment.URI_DB,
  }),
  secret: envieroment.COOKIES_SECRET,
  resave: true,
  saveUninitialized: true,
};

module.exports = sessionConfig;
