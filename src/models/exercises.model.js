import mongoose from "mongoose";

const excerciseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

export default mongoose.model('Excercise', excerciseSchema)