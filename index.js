import "dotenv/config.js";
import express from "express";
const app = express();
import cors from "cors"
import "./db/db.js";
const port = process.env.PORT || 5000;

import tourRouter from "./routes/v1/tour.route.js";

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tours", tourRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});