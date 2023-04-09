import express from "express";
import dotenv from "dotenv"
import dataRoutes from "./routes/data.js"
import bodyParser from "body-parser";

/* Config */
dotenv.config();

/* App initialization */
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* Routes */
app.use("/", dataRoutes)

const PORT = process.env.PORT || 6001

app.listen(PORT, () => console.log(`Server Port: ${PORT}`))