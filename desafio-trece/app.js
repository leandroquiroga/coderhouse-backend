require('dotenv').config();

const server = require("./server");
const { environment } = require('./configuration/environment');

server.listen(environment.PORT, () => {
  (environment.PORT)
    ? console.log(`Server running on http://${environment.URI}:${environment.PORT} - PID: ${process.pid}`)
    : console.log(`Server failded! Please contact whith administrator`)
});