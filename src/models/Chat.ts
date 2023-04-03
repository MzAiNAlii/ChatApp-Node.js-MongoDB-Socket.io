import mongoose ,{ Schema } from "mongoose";

const userSchema = new Schema({
    Msg:{
        type : String,
        require : false,
        default : " "
    },
   
},{
        timestamps : true
})
const Chat = mongoose.model("Chat",userSchema)

export default Chat