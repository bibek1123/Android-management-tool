
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 8000
const server = http.createServer(app);
const io = socketIO(server);
const { handleSocketEvents } = require('../services/socketService');
const bodyParser = require('body-parser');

require("./db/connection");
global.util = util;
global.baseDir = __dirname;

app.use(express.json());
app.use(require("./router/index"));
app.use(bodyParser.urlencoded({ extended: false }))

io.on('connection', (socket) => {
    console.log('A user connected');
    handleSocketEvents(socket, io);
});

server.listen(PORT, () => {
  logger.info(`Server is running at PORT ${PORT}`);
});
