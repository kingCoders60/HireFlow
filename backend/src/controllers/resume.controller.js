import Resume from "../models/resume.model.js"

const extractSkillsFromFilename=(fileName)=>{
    const keywords = [
      "react",
      "node",
      "express",
      "mongo",
      "python",
      "java",
      "aws",
      "docker",
    ];
    const lowerName = fileName.toLowerCase();
    return keywords.filter((skill) => lowerName.includes(skill));
}
export const uploadResume=async(req,res)=>{
    try {
        const file = req.file;
        if(!file){
            return res.status(500).json({message:"No file Uploaded!"});
        }
        console.log('Uploaded File',file.originalname);
        const matchScore = Math.floor(Math.random()*36)+65;
        const skills = extractSkillsFromFilename(file.originalname);
        const newResume=new Resume({
            fileName:file.originalname,
            filePath:file.path,
            matchScore,
            skills,
            uploadedBy:null
        });
        await newResume.save();
        console.log("Resume Uploaded",file.originalname);
        res.status(200).json({
            message:"Resume Upload Successfully!",
            Filename:file.originalname,
            matchScore
        })
        console.log("File Uploaded Successfully!");
    } catch (error) {
        console.log('Resume Upload Error!');
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

export const getAllResume = async(req,res)=>{
    try {
        const resume = await Resume.find().sort({updatedAt:-1});
        res.status(200).json({
            resume
        })
        console.log(resume)
    } catch (error) {
        console.log('Fetch resumes Failed!');
        res.status(500).json({
            message:"could not fetch resumes!",
            error:err.message
        });
    }
}