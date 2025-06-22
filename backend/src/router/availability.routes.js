import express from "express";
import {submitAvailability,getAvailabilityByUser} from '../controllers/availability.js'
const router = express.Router();
router.post('/',submitAvailability);
router.get('/:userId',getAvailabilityByUser);
export default router;