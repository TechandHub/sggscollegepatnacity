import User from "../../models/user-models/user-models.js"
import { generateUserName, generatePassword, sendCredentialsToEmail } from "../../utils/util-functions.js"
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    try {
        res.status(200).render("register")
    } catch (error) {
        console.log("Error in userRegister GET", error)
    }
}


export const userRegisterPost = async (req, res) => {
    try {
        let { fullName, mobileNumber, email } = req.body

        const emailExist = await User.findOne({ email })
        const mobileNumberExist = await User.findOne({ mobileNumber })

        if (emailExist || mobileNumberExist) {
            // req.flash("flashMessage", ["Mobile or Email already exists", "alert-danger", "bg-danger"])
            return res.status(201).redirect('register')
        } else {
            const userName = generateUserName(email, mobileNumber)
            const password = generatePassword()

            const newUser = new User({
                fullName, mobileNumber, email, userName, password
            })

            // Sending UserName and Password to Mobile Number
            // sendCredentialsToMobileNumber(userName, password, mobileNumber, "register")

            // Sending UserName and Password to Email
            sendCredentialsToEmail(userName, password, email)

            const savedUser = await newUser.save()


            // req.flash("flashMessage", ["Registration successful, Username & Password sent to mobile No. and Email", "alert-success", "bg-success"])
            res.status(201).redirect('login')
        }
    } catch (error) {
        console.log("Error in userRegister POST", error)
    }
}


export const userLogin = async (req, res) => {
    try {
        res.status(200).render("login")
    } catch (error) {
        console.log("Error in userLogin GET", error)
    }
}


export const userLoginPost = async (req, res) => {
    try {
        const { userName, password } = req.body
        let foundUserName = await User.findOne({ userName })

        if (foundUserName === null) {
            // req.flash("flashMessage", ["User name not found. Please register first !!", "alert-danger", "bg-danger"])
            return res.status(201).redirect(`register`)
        }

        if (foundUserName && foundUserName.password === password) {
            const token = jwt.sign({
                _id: foundUserName._id,
                isAdmin: foundUserName.isAdmin
            }, process.env.SECRET_KEY,
                { expiresIn: "1d" })
            res.cookie('uid', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true })

            if (foundUserName.isAdmin) {
                // req.flash("flashMessage", ["Login successfull ...", "alert-success", "bg-success"])
                res.status(201).redirect('/main/admin/dashboard')
            } else {
                // req.flash("flashMessage", ["Login successfull ...", "alert-success", "bg-success"])
                res.status(201).redirect('/main/user/dashboard')
            }
        } else {
            // req.flash("flashMessage", ["Username or password is incorrect", "alert-warning", "bg-warning"])
            return res.status(201).redirect(`login`)
        }
    } catch (error) {
        console.log("Error in userLogin POST", error)
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("uid");
        // res.status(201).redirect('https://www.mdcollegenaubatpur.ac.in
        res.status(201).redirect('/')
    } catch (error) {
        console.log("Error in logout page", error)
        // res.status(400).render('error-page')
        // req.flash("flashMessage", ["Something went wrong, Try again !!", "alert-danger", "bg-danger"])
        return res.status(201).redirect(`register`)
    }
}
