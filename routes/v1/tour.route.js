import { Router } from "express";
import { getTours, addTours, getTourById } from "../../controllers/tours.controller.js";
const router = Router();

router.get('/', getTours)
router.post('/', addTours)
router.get('/:id', getTourById)


export default router;