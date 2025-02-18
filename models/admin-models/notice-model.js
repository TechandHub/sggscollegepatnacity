import mongoose from "mongoose"

const noticeSchema = mongoose.Schema({
    noticeTitle:{
        type : String,
        required : true
    },
    noticeMedia:{
        type : String,
        required : true
    }
}, { timestamps:true })

const Notice = mongoose.model("notice", noticeSchema)
export default Notice