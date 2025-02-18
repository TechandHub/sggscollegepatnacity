import express from 'express'
const adminNoticeBoardRoute = express.Router()
import { adminAuth, upload } from '../../utils/util-functions.js'


import { noticeBoard, noticeBoardPost } from '../../controllers/admin-controllers/notice-board-controller.js'

adminNoticeBoardRoute.get('/notice-board', adminAuth, noticeBoard)
adminNoticeBoardRoute.post('/notice-board', upload.single("noticeMedia"), adminAuth, noticeBoardPost)
// adminNoticeBoardRoute.get('/edit-notice/:id', adminAuth, editNotice)
// adminNoticeBoardRoute.post('/edit-notice/:id', upload.single("noticeMedia"), adminAuth, editNoticePost)
// adminNoticeBoardRoute.get('/delete-notice/:id', adminAuth, deleteNotice)


export default adminNoticeBoardRoute