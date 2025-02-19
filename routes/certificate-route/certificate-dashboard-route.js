import express from 'express'
import { certificateUserAuth } from '../../utils/util-functions.js'
const certificateDashboardRoute = express.Router()

import { certificateDashboard, clcForm } from '../../controllers/certificate-controllers/certificate-controllers.js'

certificateDashboardRoute.get('/certificate/certificate-dashboard', certificateUserAuth, certificateDashboard )

certificateDashboardRoute.get('/certificate/clc', certificateUserAuth, clcForm )
// certificateDashboardRoute.post('/certificate/clc', certificateUserAuth, clcFormPost )

// certificateDashboardRoute.get('/certificate/character-certificate', certificateUserAuth, characterCertificateForm )
// certificateDashboardRoute.post('/certificate/character-certificate', certificateUserAuth, characterCertificateFormPost )

// certificateDashboardRoute.get('/certificate/marksheet', certificateUserAuth, marksheetForm )

// certificateDashboardRoute.get('/certificate/tc', certificateUserAuth, tcForm )

// certificateDashboardRoute.get('/certificate/original-passing-certificate-inter', certificateUserAuth, originalPassingCertificateInterForm )

// certificateDashboardRoute.get('/certificate/bonafied', certificateUserAuth, bonafiedForm )
// certificateDashboardRoute.post('/certificate/bonafied', certificateUserAuth, bonafiedFormPost )

// certificateDashboardRoute.get('/certificate/forwading-degree-migration', certificateUserAuth, forwadingDegreeMigrationForm )

// certificateDashboardRoute.get('/certificate/registration-forwading', certificateUserAuth, registrationForwadingForm )

// certificateDashboardRoute.get('/certificate/document-verification-private', certificateUserAuth, documentVerificationPrivateForm )

// certificateDashboardRoute.get('/certificate/miscellaneous', certificateUserAuth, miscellaneousForm )

export default certificateDashboardRoute