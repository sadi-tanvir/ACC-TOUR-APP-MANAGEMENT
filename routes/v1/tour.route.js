import { Router } from "express";
import { getTours, addTours, getTourById, updateTourById, getTrendingTours, getCheapestTours } from "../../controllers/tours.controller.js";
const router = Router();

router.get('/', getTours)
router.post('/', addTours)
router.get('/trending', getTrendingTours)
router.get('/cheapest', getCheapestTours)
router.get('/:id', getTourById)
router.patch('/:id', updateTourById)


export default router;