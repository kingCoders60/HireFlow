import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fileName: String,
    filePath: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    matchScore: Number,
    skills: [String],
    uploadedAt: { type: Date, default: Date.now }
}, { timestamps: true });