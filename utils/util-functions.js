import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import User from '../models/user-models/user-models.js';
import multer from 'multer'
import cloudinary from 'cloudinary'
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_USER_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_USER_SECRET,
    secure: true,
});

export const generateUserName = (email, mobileNumber) => {
    // Check if email and mobileNumber are strings and have the required length
    if (typeof email !== 'string' || email.length < 6) {
        throw new Error("Invalid email: Email must be a string with at least 6 characters.");
    }

    if (typeof mobileNumber !== 'string' || mobileNumber.length < 7) {
        throw new Error("Invalid mobile number: Mobile number must be a string with at least 7 characters.");
    }

    // Generate the username
    const username = email.slice(0, 6) + mobileNumber.slice(3, 7) + "@SGGSC";
    return username.toUpperCase();
}

export const generatePassword = () => {
    const characters = 'ABC0DEF1GHI2JKL3MNO4PQR5STU6VWX7Y89';
    let createdPassword = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        createdPassword += characters[randomIndex];
    }
    return createdPassword;
}

export const sendCredentialsToEmail = async (userName, password, email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail.com',
        // port: 587,
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: email,
        subject: 'Login Credentials',
        // text: 'Yout CLC approved... 🎉',
        text: `Dear Students, Your login credentials are \nUserName is ${userName} and Password is ${password}. \n \n MD College, Patna`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error while sending credentials to email ::', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

export const adminAuth = async (req, res, next) => {
    try {
        const token = req.cookies.uid
        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findOne({ _id: verifiedUser._id })
        if (user.isAdmin) {
            req._id = user._id,
                req.userName = user.userName,
                req.email = user.email,
                req.isAdmin = user.isAdmin
        } else {
            // req.flash("flashMessage", ["Access denied, Please login", "alert-danger", "bg-danger"])
            return res.redirect('/main/login')
        }
        next()
    } catch (error) {
        console.log("Error in admin auth verification", error)
        // req.flash("flashMessage", ["Access denied, Please login", "alert-danger", "bg-danger"])
        return res.redirect('/main/login')
    }
}

export const userAuth = async (req, res, next) => {
    try {
        const token = req.cookies.uid
        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findOne({ _id: verifiedUser._id })
        if (!user.isAdmin) {
            req._id = user._id,
                req.userName = user.userName,
                req.email = user.email,
                req.isAdmin = user.isAdmin
        } else {
            // req.flash("flashMessage", ["Access denied, Please login", "alert-danger", "bg-danger"])
            return res.redirect('/main/login')
        }
        next()
    } catch (error) {
        console.log("Error in admin auth verification", error)
        // req.flash("flashMessage", ["Access denied, Please login", "alert-danger", "bg-danger"])
        return res.redirect('/main/login')
    }
}

const storage = multer.diskStorage({})
export const upload = multer({
    storage: storage
    // limits: {fileSize: 100000}
})


export const noticeUpload = async (file) => {
    try {
        const result = await cloudinary.v2.uploader.upload(file, {
            resource_type: 'auto'
        })
        return result
    } catch (error) {
        console.error('Error uploading PDF:', error);
    }
}

export const certificateUserAuth = async (req, res, next) => {
    try {
        const token = req.cookies.uid
        const verifiedUser = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(verifiedUser)
        req.id = verifiedUser.id,
            req.userName = verifiedUser.userName,
            req.fullName = verifiedUser.fullName
        next()
    } catch (error) {
        console.log("Error in certificate User Auth verification Sahil", error)
        req.flash("flashMessage", ["Invalid session, Please Login first..", "alert-danger", "bg-danger"])
        return res.status(200).redirect('login')
    }
} 