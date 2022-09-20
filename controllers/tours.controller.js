import Tour from "../models/Tour.js";
import { addTourServices, getTourByIdService, getToursService, updateTourByIdService } from "../services/tour.services.js";

export const addTours = async (req, res) => {
    try {
        const tour = await addTourServices(req.body)

        res.status(201).json({
            status: "success",
            message: "Tour added successfully",
            data: tour
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to add tour',
            error: error.message
        })
    }
}

export const getTours = async (req, res) => {
    try {
        // query
        const tours = await getToursService(req)

        res.status(200).json({
            status: 'success',
            message: 'Tours fetched successfully',
            tours
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to fetched tours',
            error: error.message
        })
    }
}

export const getTourById = async (req, res) => {
    try {
        // query
        const tour = await getTourByIdService(req);

        if (!tour) return res.status(404).json({ success: false, message: 'Tour not found' });

        res.status(200).json({
            status: 'success',
            message: 'Tour fetched successfully',
            tour
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to fetched tour',
            error: error.message
        })
    }
}

export const updateTourById = async (req, res) => {
    try {
        // query
        const tour = await updateTourByIdService(req);

        res.status(200).json({
            status: 'success',
            message: 'Tour updated successfully',
            tour
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to updated tour',
            error: error.message
        })
    }
}

export const getTrendingTours = async (req, res) => {
    try {
        const tours = await Tour.find({}).sort({ view: -1 }).limit(3);

        res.status(200).json({
            status: 'success',
            message: 'Tour fetched successfully',
            tours
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to updated tour',
            error: error.message
        })
    }
}

export const getCheapestTours = async (req, res) => {
    try {
        const tours = await Tour.find({}).sort({ price: 1 }).limit(3);

        res.status(200).json({
            status: 'success',
            message: 'Tour fetched successfully',
            tours
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: 'Failed to updated tour',
            error: error.message
        })
    }
}
