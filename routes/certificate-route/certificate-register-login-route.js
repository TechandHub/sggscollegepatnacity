import express from 'express'

const certificateRegisterLoginRoute = express.Router()

import { certificateRegister, certificateRegisterPost, certificateLogin, certificateLoginPost } from '../../controllers/certificate-controllers/certificate-register-login-controllers.js'



certificateRegisterLoginRoute.get('/certificate/register', certificateRegister)
certificateRegisterLoginRoute.post('/certificate/register', certificateRegisterPost)

certificateRegisterLoginRoute.get('/certificate/login', certificateLogin)
certificateRegisterLoginRoute.post('/certificate/login', certificateLoginPost)

export default certificateRegisterLoginRoute