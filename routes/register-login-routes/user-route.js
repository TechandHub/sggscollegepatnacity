import express from "express";
const userRoute = express.Router();

import { userRegister, userRegisterPost, userLogin, userLoginPost, logout } from "../../controllers/register-login-controllers/user-controller.js";

userRoute.get("/register", userRegister)
userRoute.post("/register", userRegisterPost)

userRoute.get("/login", userLogin)
userRoute.post("/login", userLoginPost)

userRoute.get('/logout', logout)

export default userRoute;