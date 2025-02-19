import mongoose from 'mongoose'

let clcSchema = mongoose.Schema({
    fullName:{
        type : String,
        required : true
    },
    fatherName: {
        type : String,
        required : true,
    },
    motherName: {
        type : String,
        required : true,
    },
    aadharNumber: {
        type : Number,
        required : true,
    },
    parmanentAddress: {
        type : String,
        required : true,
    },
    dOB: {
        type : String,
        required : true,
    },
    course: {
        type : String,
        required : true,
    },
    session: {
        type : String,
        required : true,
    },
    dOAdm: {
        type : String,
        required : true,
    },
    classRollNumber: {
        type : Number,
        required : true,
    },
    yearOfExam: {
        type : String,
        required : true
    },
    resultDivision:{
        type : String,
        required : true,
    },
    regNumber :{
        type: String,
        default: false
    },
    uniRollNumber: {
        type : String,
        required : true
    },
    remark:{
        type: String,
        default: 'Good'
    },
    serialNo:{
        type : Number
    },
    studentId:{
        type: String
    },
    dOfLeavingCollege:{
        type: String
    },
    appliedBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'certificateUser'
    },
    isFormFilled :{
        type: Boolean,
        default: false
    },
    
    // ====================================== Urgent ===========================================
    urgentClcFee:{
        type: Number,
        default : 600
    },
    isUrgentPaid :{
        type: Boolean,
        default: false
    },
    isUrgentIssued :{
        type: Boolean,
        default: false
    },
    urgentIssuedAt: {
        type : String,
    },
    urgentPaymentReceipt:{
        type : String
    },
    urgentPaymentRefNo:{
        type : String,
        default: "NA"
    },
    urgentPaymentSS: {
        type : String,
        default: "NA"
    },
    urgentPaidAt: {
        type : String,
        default: "NA"
    },

    //============================= Duplicate ==================================
    duplicateClcFee:{
        type: Number,
        default : 800
    },
    isDuplicatePaid :{
        type: Boolean,
        default: false
    },
    isDuplicateIssued :{
        type: Boolean,
        default: false
    },
    duplicateIssuedAt: {
        type : String,
    },
    duplicatePaymentReceipt:{
        type : String
    },
    duplicatePaymentRefNo:{
        type : String,
        default: "NA"
    },
    duplicatePaymentSS: {
        type : String,
        default: "NA"
    },
    duplicatePaidAt: {
        type : String,
        default: "NA"
    }
}, {timestamps:true})

const CLC = mongoose.model("clc", clcSchema)
export default CLC
