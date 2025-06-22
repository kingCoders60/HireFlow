import mongoose from "mongoose";
const availbilitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
  slots: [
    {
      start: Date,
      end: Date,
    },
  ],
},{timestamps:true});
export default mongoose.model('Avaibility',availbilitySchema);