import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    fileName: { type: String },
    filePath: { type: String },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    matchScore: { type: Number },
    skills: [{ type: String }],
    uploadedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Resume', resumeSchema);