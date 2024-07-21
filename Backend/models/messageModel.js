const mongoose=require("mongoose")

const messageSchema=mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    recieverId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    message:{
        type:String,
        required:true
    }

},{timestamps:true})

const Message=mongoose.model("Message",messageSchema)
module.exports= Message