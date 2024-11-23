import mongoose from "mongoose";


const calendarySchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})

export default mongoose.model("Calendary",calendarySchema)