import express from "express";
const indexRoute = express.Router()

import { index, contact, about, notice } from "../../controllers/static-page-controllers/index-controller.js";

indexRoute.get("/", index )
indexRoute.get("/contact", contact )
indexRoute.get("/about", about)
indexRoute.get("/notice", notice)

export default indexRoute