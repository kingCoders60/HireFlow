import Avaibility from "../models/Availability.model.js";
export const submitAvailability = async(req,res)=>{
    try {
        const {user,slots}=req.body;
        if(!user){
            return res.status(400).json({
                message:"User Id and atleast One time Slot must be selected!"
            })
        }
        let existing = await Avaibility.findOne({ user });
        if(existing){
            existing.slots.push(...slots);
            await existing.save();
            return res.status(200).json({message:"Aviability Updated Successfully!"});
        }
        if(!existing){
            const newAvialibilty = new Avaibility({user,slots});
            newAvialibilty.save();
            return res.status(200).json({message:"Aviability submitted successfully!"});
        }
    } catch (error) {
        console.log("Error occured in Error Availability!",error);
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}