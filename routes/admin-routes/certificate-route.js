import express from 'express'
const certificateAdminRoute = express.Router()
import { adminAuth } from '../../utils/util-functions.js'

import { clcList } from '../../controllers/admin-controllers/certificate-controller.js'

certificateAdminRoute.get("/clc-list", adminAuth, clcList)

export default certificateAdminRoute