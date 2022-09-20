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

        // await tour.save();

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

export const getTours = (req, res) => {
    res.send({
        message: 'Hello World'
    });
}
