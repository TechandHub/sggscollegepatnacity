import express from "express";

const ugRegularSem2_2024_2028_Route = express.Router()

import { adminAuth } from "../../../utils/util-functions.js";

import { ugRegularSem2_2024_2028_Adm_List } from "../../../controllers/admin-controllers/ug-regular-2024-2028/ug-regular-sem-2.js";

ugRegularSem2_2024_2028_Route.get("/ugRegularSem2_2024_2028", adminAuth, ugRegularSem2_2024_2028_Adm_List )

export default ugRegularSem2_2024_2028_Route;