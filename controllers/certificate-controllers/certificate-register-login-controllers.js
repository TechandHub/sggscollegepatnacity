import CertificateUser from '../../models/certificate-models/certificate-user-model.js'
import { generateUserName, generatePassword, sendCredentialsToEmail } from '../../utils/util-functions.js'
import jwt from "jsonwebtoken"

export const certificateRegister = async (req, res) => {
    try {
        res.status(201).render('certificate-register')
        // res.status(201).render('certificate-register', { message: req.flash("flashMessage") })
    } catch (error) {
        console.log("Error in certificate register page Sahil", error)
        res.status(400).render('error-page')
    }
}

export const certificateRegisterPost = async (req, res) => {
    try {
        const { fullName, mobileNumber, email } = req.body
        let existMobileNumber = await CertificateUser.findOne({ mobileNumber })
        let existEmail = await CertificateUser.findOne({ email })

        if (existMobileNumber || existEmail) {
            // req.flash("flashMessage", ["Mobile or Email already exists", "alert-danger", "bg-danger"])
            return res.status(201).redirect('register')
        }
        else {
            const userName = generateUserName(email, mobileNumber)
            const password = generatePassword()

            const newCertificateUser = new CertificateUser({
                fullName, mobileNumber, email, userName, password
            })

            // Sending UserName and Password to Mobile Number
            // sendCredentialsToMobileNumber(userName, password, mobileNumber, "register")

            // Sending UserName and Password to Email
            sendCredentialsToEmail(userName, password, email)

            const savedUser = await newCertificateUser.save()


            // req.flash("flashMessage", ["Registration successful, Username & Password sent to mobile No. and Email", "alert-success", "bg-success"])
            res.status(201).redirect('login')

        }
    } catch (error) {
        console.log("Error in certificate register post page Sahil", error)
        // req.flash("flashMessage", ["Something went wrong, try again.", "alert-danger", "bg-danger"])
        res.status(201).redirect('register')
    }
}

export const certificateLogin = async (req, res) => {
    try {
        res.status(201).render('certificate-login')
        // res.status(201).render('certificate-login', { message: req.flash("flashMessage") })
    } catch (error) {
        console.log("Error in certificate login page Sahil", error)
        res.status(400).render('error-page')
    }
}


export const certificateLoginPost = async (req, res) => {
    try {
        const {userName, password} = req.body
        let foundUserByUserName = await CertificateUser.findOne({userName})
        // console.log(foundUserByUserName)

        if (foundUserByUserName == null) {
            // req.flash("flashMessage", ["User not found, Please register first.", "alert-danger", "bg-danger"])
            return res.status(201).redirect('register')
        }

        if (foundUserByUserName) {
            if (foundUserByUserName.password !== password) {
                // req.flash("flashMessage", ["Username or password is incorrect..", "alert-danger", "bg-danger"])
                return res.status(201).redirect('login')
            } else {
                const token = jwt.sign(
                    {
                        id : foundUserByUserName._id,
                        userName : foundUserByUserName.userName,
                        fullName : foundUserByUserName.fullName
                    },
                    process.env.SECRET_KEY,
                    {
                        expiresIn : '1d'
                    }
                )
                res.cookie('uid', token, {maxAge : 24*60*60*1000, httpOnly: true})

                // req.flash("flashMessage", ["Login successful", "alert-success", "bg-success"])
                return res.status(201).redirect('certificate-dashboard')
            }
        }
        res.status(201).render('certificate-login')
    } catch (error) {
        console.log("Error in certificate login post page Sahil", error)
        res.status(400).render('error-page')
    }
}