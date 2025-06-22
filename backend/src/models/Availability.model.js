import mongoose from "mongoose";
const availbilitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  slots: [
    {
      start: Date,
      end: Date,
    },
  ],
});
export default mongoose.model('Avaibility',availbilitySchema);