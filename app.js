import 'dotenv/config'
import express from "express";
import cookieParser from 'cookie-parser'
const app = express()
const port = process.env.PORT || 3000

import connectDB from './utils/db.js';

// Importing Routes
import indexRoute from "./routes/static-page-routes/index-route.js";
import userRoute from "./routes/register-login-routes/user-route.js";


// Importing Admin Routes
import adminDashboardRoute from './routes/admin-routes/dashboard-route.js';
import adminNoticeBoardRoute from './routes/admin-routes/notice-board-route.js';
import ugRegularSem2_2024_2028_Route from './routes/admin-routes/ug-regular-2024-2028/ug-regular-sem-2.js';

// Importing User Routes
import userDashboardRoute from './routes/user-routes/dashboard-route.js';

// Importing Certificate Routes
import certificateRegisterLoginRoute from './routes/certificate-route/certificate-register-login-route.js';
import certificateDashboardRoute from './routes/certificate-route/certificate-dashboard-route.js';


// App Middlewares
app.set("view engine", "ejs")
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", indexRoute)
app.use("/main", userRoute)

// Admin Routes
app.use("/main/admin", adminDashboardRoute)
app.use("/main/admin", adminNoticeBoardRoute)
app.use("/main/admin", ugRegularSem2_2024_2028_Route)

// User Routes
app.use("/main/user", userDashboardRoute)

// Certificate Routes
app.use('/main', certificateRegisterLoginRoute)
app.use('/main', certificateDashboardRoute)

connectDB().then(() => {
    app.listen( port , () =>{
        console.log(`App is running on http://127.0.0.1:${port}`)
    })
})