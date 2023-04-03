"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import httpServer from './app'
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
//import userController from './controllers/user'
const app = (0, express_1.default)();
app.use(express_1.default.json());
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
//import Users from './models/Chat'
io.on('connection', function connection(socket) {
    console.log(`user connect ${socket.id}`);
    socket.on('message', function message(data) {
        console.log('received: %s', data);
    });
    socket.send('something');
    socket.on('disconnect', () => {
        console.log(`user disconnect ${socket.id}`);
    });
});
app.get("/home", (req, res) => {
    res.send("home");
});
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`Server is Running on ${process.env.PORT}`);
    });
})
    .catch(err => {
    console.log("error", err);
});
    