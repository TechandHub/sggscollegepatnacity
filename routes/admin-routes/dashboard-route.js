import express from 'express'
const adminDashboardRoute = express.Router()
import { adminAuth } from '../../utils/util-functions.js'

import { dashboard } from '../../controllers/admin-controllers/dashboard-controller.js'

adminDashboardRoute.get("/dashboard", adminAuth, dashboard)
// adminDashboardRoute.get("/contact-messages", adminAuth, contactMessages)
// adminDashboardRoute.get("/contact-message/reply", adminAuth, contactMessagesReply)
// adminDashboardRoute.post("/contact-message/reply", adminAuth, contactMessagesReplyPost)


export default adminDashboardRoute