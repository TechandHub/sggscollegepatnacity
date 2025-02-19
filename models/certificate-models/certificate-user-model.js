import mongoose from "mongoose";

let certificateUserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    session: {
        type: String
    },
    course: {
        type: String,
    },
    regNumber: {
        type: String
    },
    uniRollNumber: {
        type: String
    },
    collegeRollNumber: {
        type: String
    },
    clc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CLC'
    },
    cc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CC'
    },

}, { timestamps: true })

const CertificateUser = mongoose.model("certificateUser", certificateUserSchema)
export default CertificateUser