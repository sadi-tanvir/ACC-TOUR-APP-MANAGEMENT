import { Router } from "express";
import { getTours, addTours, getTourById, updateTourById } from "../../controllers/tours.controller.js";
const router = Router();

router.get('/', getTours)
router.post('/', addTours)
router.get('/:id', getTourById)
router.patch('/:id', updateTourById)


export default router;