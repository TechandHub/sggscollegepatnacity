import User from "../../models/user-models/user-models.js"
import Notice from "../../models/admin-models/notice-model.js"
import { noticeUpload } from "../../utils/util-functions.js"

export const noticeBoard = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req._id })

        let allNotices = await Notice.find()

        res.status(201).render('publish-notice', { user, allNotices })
        // res.status(201).render('publish-notice', { message: req.flash("flashMessage"), user, allNotices })
    } catch (error) {
        console.log("Error in admin notice board", error)
        // req.flash("flashMessage", ["Oops, something went wrong", "alert-danger", "bg-danger"])
        return res.redirect('/main/admin/notice-board')
    }
}


export const noticeBoardPost = async (req, res) => {
    try {
        const { noticeTitle } = req.body
        const uploadedNotice = await noticeUpload(req.file.path)
        const noticeMedia = uploadedNotice.secure_url
        const notice = new Notice({
            noticeTitle,
            noticeMedia
        })
        await notice.save()

        // req.flash("flashMessage", ["Notice published ...", "alert-success", "bg-success"])
        res.status(201).redirect('/main/admin/notice-board')

    } catch (error) {
        console.log("Error in admin notice board post", error)
        // req.flash("flashMessage", ["Oops, something went wrong", "alert-danger", "bg-danger"])
        return res.redirect('/main/admin/notice-board')
    }
}