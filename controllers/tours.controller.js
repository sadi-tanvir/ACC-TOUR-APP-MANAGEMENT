import Tour from "../models/Tour.js";

export const addTours = async (req, res) => {
    try {
        const { name, price, duration, image } = req.body;
        const tour = await Tour.create({
            name,
            price,
            duration,
            image
        })

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
        const { fields, limit, page, sort } = req.query;
        const filteredBy = fields?.split(',').join(' ');
        const sortBy = sort?.split(',').join(' ');

        const tours = await Tour.find({}, filteredBy)
            .sort(sortBy)
            .limit(Number(limit))
            .skip(Number(page) * Number(limit));

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
        const { id } = req.params;
        // update view count
        await Tour.updateOne({ _id: id }, { $inc: { view: 1 } });
        
        // find tour information
        const tour = await Tour.findOne({ _id: id });
        if(!tour) return res.status(404).json({success: false, message: 'Tour not found'});

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
        const { id } = req.params;
        // update view count
        const tour = await Tour.updateOne({ _id: id }, { $set: req.body }, {runValidators: true});

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
