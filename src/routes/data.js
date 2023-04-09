import express from "express";
import { getSystemData } from "../controllers/data.js";

const router = express.Router();

/* Read Data */
router.get("/", getSystemData);

export default router;
