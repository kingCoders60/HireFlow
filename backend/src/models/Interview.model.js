import mongoose from "mongoose";
const interviewSchema = new mongoose.Schema({
    candidate:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    interviewer:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    sheduledTime:Date,
    videoLeak:String,
    status:{type:String,enum:['sheduled','completed','cancelled'],default:sheduled},
},{timestamps:true});

export default mongoose.model('Interview',interviewSchema);
