import User from "../../models/user-models/user-models.js"

export const dashboard = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req._id })
        
        res.status(201).render("admin-dashboard", { user })
        // res.status(201).render("admin-dashboard", { message: req.flash("flashMessage"), user })
    } catch (error) {
        console.log("Error in admin dashboard", error)
        // req.flash("flashMessage", ["Oops, something went wrong", "alert-danger", "bg-danger"])
        return res.redirect('/main/admin/dashboard')
    }
}