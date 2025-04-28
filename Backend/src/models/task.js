import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please enter a title"],
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    status:{
        type: String,
        default: "incomplete",
        enum: ["incomplete", "completed"]
    },
    priority:{
        type:String,
        enum:["low", "medium", "high"],
        default:"medium",
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},{timestamps:true});

 const Task = mongoose.model("Task", taskSchema);
    export default Task;