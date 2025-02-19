import CertificateUser from "../../models/certificate-models/certificate-user-model.js"
import CLC from "../../models/certificate-models/clc-model.js"

// ======================================
// =============== Certificate Dashboard =============
// ======================================
export const certificateDashboard = async (req, res) =>{
    try {
        const user = await CertificateUser.findOne({ _id: req.id })
        const fullName = req.fullName
        const userName = req.userName
        const id = req.id
        console.log(fullName, userName, id)
        // res.status(200).render('certificate-dashboard', {message : req.flash("flashMessage"), user, fullName, userName, id})
        res.status(200).render('certificate-dashboard', { user, fullName, userName, id})
    } catch (error) {
        console.log("Error in certificate dashboard page Sahil", error)
        res.status(400).render('error-page')
    }
}


// ======================================
// =============== Clc Form =============
// ======================================
export const clcForm = async (req, res) =>{
    try {
        const { type } = req.query
        const user = await CertificateUser.findOne({ _id: req.id })
        const appliedUser = await CLC.findOne({ appliedBy: user._id.toString() })
        console.log(appliedUser)
        if (type === undefined) {
            if (appliedUser != null) {
                return res.render('clc-form', {user, clcType: "normal", appliedUser })
            }
            return res.render('clc-form', {user, clcType: "normal" })
        } else {
            if (appliedUser != null) {
                return res.render('clc-form', {user, clcType : type, appliedUser })
            }
            return res.render('clc-form', {user, clcType : type })
        }
    } catch (error) {
        console.log("Error in clcForm page Sahil", error)
        res.status(400).render('error-page')
    }
}