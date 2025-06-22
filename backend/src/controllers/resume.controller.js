export const uploadResume=async(req,res)=>{
    try {
        const file = req.file;
        if(!file){
            return res.status(500).json({message:"No file Uploaded!"});
        }
        console.log('Uploaded File',file.originalname);
        const matchScore = Math.floor(Math.random()*36)+65;
        res.status(200).json({
            message:"Resume Upload Successfully!",
            Filename:file.originalname,
            matchScore
        })
    } catch (error) {
        console.log('Resume Upload Error!');
        res.status(500).json({
            message:'Internal Server Error'
        })
    }
}