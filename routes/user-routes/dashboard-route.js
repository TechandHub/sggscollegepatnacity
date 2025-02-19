import express from 'express'
const userDashboardRoute = express.Router()
import { userAuth } from '../../utils/util-functions.js'

import { dashboard, ugRegularSem2AdmissionForm } from '../../controllers/user-controllers/dashboard-controller.js'

userDashboardRoute.get("/dashboard", userAuth, dashboard)
userDashboardRoute.get("/ugRegularSem2AdmissionForm", userAuth, ugRegularSem2AdmissionForm)
// userDashboardRoute.get("/contact-message/reply", adminAuth, contactMessagesReply)
// userDashboardRoute.post("/contact-message/reply", adminAuth, contactMessagesReplyPost)


export default userDashboardRoute