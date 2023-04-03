import express from 'express'
import { Server } from 'socket.io'
import {createServer} from 'http'
import Chat from './models/Chat'

const app =express()
app.use(express.json())
const httpServer :any = createServer(app)
const io= new Server(httpServer)

var users = 0;
var roomNo = 1;
var full = 0;

io.on('connection', (socket) => {
    console.log('A user connect')
    users++;

    socket.emit("newUserConnect",'Hi, Welcome to the Chat')

    socket.broadcast.emit("UserConnect",{message : users + 'users connected'})
    
    socket.on("sender",(Msg)=>{
        const receiverMessage = new Chat({Msg})
        receiverMessage.save().then(()=>{
        console.log("receive ",Msg)
        })
      
    })

    socket.on('msgfromserver',(Msg)=>{
        const senderMessage =  new Chat({Msg})
        senderMessage.save().then(()=>{
            io.emit('msgtoclient',Msg)
            console.log('send ',Msg)
        })
    
      })
      socket.join("room-" + roomNo)


      io.sockets.in("room-" + roomNo).emit('connectRoom','You are connected to room no' + roomNo)

        full++;
        if(full >= 3){
         full = 0
         roomNo++
        }
  
   
    socket.on('disconnect',()=>{
        console.log('A user disconnect' )
        users--;
        socket.broadcast.emit("userDisconnect",{message:users + 'users connects'})
    

    })  
})

export default httpServer;