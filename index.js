import "dotenv/config.js";
import express from "express";
const app = express();
import "./db/db.js";



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});