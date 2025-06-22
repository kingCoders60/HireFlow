import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['candidate','intervieewer','admin'],
         default:'candidate'
    },
})
export default mongoose.model('User',userSchema);