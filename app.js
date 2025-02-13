import express from "express";
import cookieParser from 'cookie-parser'
const app = express()
const port = process.env.PORT || 3000

// Importing Routes
import indexRoute from "./routes/static-page-routes/index-route.js";

// App Middlewares
app.set("view engine", "ejs")
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/", indexRoute)

app.listen( port , () =>{
    console.log(`App is running on http://127.0.0.1:${port}`)
})