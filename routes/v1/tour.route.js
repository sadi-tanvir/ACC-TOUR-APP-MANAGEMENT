import { Router } from "express";
import { getTours,addTours } from "../../controllers/tours.controller.js";
const router = Router();

router.get('/', getTours)
router.post('/', addTours)


export default router;