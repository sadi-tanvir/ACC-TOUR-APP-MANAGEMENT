import Tour from "../models/Tour.js"

export const addTourServices = async (data) => {
    const { name, price, duration, image } = data;
    const tour = await Tour.create({
        name,
        price,
        duration,
        image
    })

    return tour;
}


export const getToursService = async (req) => {
    const { fields, limit, page, sort } = req.query;
    const filteredBy = fields?.split(',').join(' ');
    const sortBy = sort?.split(',').join(' ');

    const tours = await Tour.find({}, filteredBy)
        .sort(sortBy)
        .limit(Number(limit))
        .skip(Number(page) * Number(limit));

    return tours;
}


export const getTourByIdService = async (req) => {
    const { id } = req.params;
    
    // update view count
    await Tour.updateOne({ _id: id }, { $inc: { view: 1 } });

    // find tour information
    const tour = await Tour.findOne({ _id: id });

    return tour;
}


export const updateTourByIdService = async (req) => {
    const { id } = req.params;

        // update tour
        const tour = await Tour.updateOne({ _id: id }, { $set: req.body }, { runValidators: true });

    return tour;
}