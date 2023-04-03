import httpServer from './app'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO_URI!,)
.then(()=>{
    httpServer.listen(process.env.PORT!,()=>{
        console.log(`Server is Running on ${process.env.PORT!}`)
    })
})
.catch(err=>{
    console.log("error", err)
})
