import express from "express";
const indexRoute = express.Router()

import { index, contact } from "../../controllers/static-page-controllers/index-controller.js";

indexRoute.get("/", index )
indexRoute.get("/contact", contact )

export default indexRoute