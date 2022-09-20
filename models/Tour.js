import { Schema, model } from "mongoose"


const tourSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true,
        minLength: [5, 'A tour name must have more or equal then 5 characters'],
        maxLength: [50, 'A tour name must have less or equal then 50 characters']
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price'],
        min: [0, 'A tour price must be greater then 0'],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        message: "Price must be an integer"
    },
    duration: {
        type: String,
        required: [true, 'A tour must have a duration'],
    },
    image: {
        type: String
    },
    view: {
        type: Number,
        default: 0
    }
}, { timestamps: true })



export default model("Tour", tourSchema)