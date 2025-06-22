import  express from "express";
import multer from "multer";
import {uploadResume} from "../controllers/resume.controller.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });
router.post("/", upload.single("resume"), uploadResume);

export default router;