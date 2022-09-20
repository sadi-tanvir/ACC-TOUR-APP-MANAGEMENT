import { connect } from "mongoose"
const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.jnizw.mongodb.net/${process.env.USER}?retryWrites=true&w=majority`;

connect(url)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));