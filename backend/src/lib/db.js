import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URL);
    console.log(`MONGODB is Connected Successfully!`);
  } catch (error) {
    console.log("MongoDB Error!" + error);
  }
};
