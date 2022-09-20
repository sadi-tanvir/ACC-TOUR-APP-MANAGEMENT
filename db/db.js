import { connect } from "mongoose"
// const url = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.jnizw.mongodb.net/${process.env.USER}?retryWrites=true&w=majority`;
// const url = `mongodb+srv://ACC-TOUR-APP-MANAGEMENT:ACC-TOUR-APP-MANAGEMENT@cluster0.jnizw.mongodb.net/ACC-TOUR-APP-MANAGEMENT?retryWrites=true&w=majority`;

// const url2 = `mongodb+srv://ACC-TOUR-APP-MANAGEMENT:ACC-TOUR-APP-MANAGEMENT@cluster0.jnizw.mongodb.net/?retryWrites=true&w=majority`
const urlLocal = 'mongodb://localhost:27017/ACC-TOUR-APP-MANAGEMENT';

connect(urlLocal)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));