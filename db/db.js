import mongoose, { connect } from "mongoose"

const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.8xgxmx2.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;


mongoose.connect(url)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));