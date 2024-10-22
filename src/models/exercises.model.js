import mongoose from "mongoose";

const excerciseSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

export default mongoose.model('Excercise', excerciseSchema)