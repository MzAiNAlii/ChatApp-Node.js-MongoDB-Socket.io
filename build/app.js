"use strict";
// import express, { json } from 'express'
// import { Request,Response } from 'express'
// import { Server } from 'socket.io'
// import {createServer} from 'http'
// //import userController from './controllers/user'
// const app =express()
// app.use(express.json())
// const httpServer :any = createServer(app)
// const io= new Server(httpServer)
// //import Users from './models/Chat'
// const user :any ={}
// const senderM: any ={}
// io.on("connection", (socket) =>{
//     console.log("user connect")
//     socket.broadcast.emit("new user joind ")
//     socket.on("send",(senderMessage) =>{
//         //user[socket.id] = senderMessage
//         console.log("Message from sender is ", senderMessage)
//     })
//     io.on("receive",(receiverMessage) =>{
//         //senderM[socket.id] = receiverMessage
//         console.log("Message from recevier is ", receiverMessage)
//     })
//     socket.on('disconnect',()=>{
//         console.log("user disconnect")
//     })
// })
// app.get("/home",(req:Request,res: Response)=>{
//     res.send("home")
// })
// export default httpServer;
