import User from "../../models/user-models/user-models.js";
import CLC from "../../models/certificate-models/clc-model.js";

export const clcList = async (req, res) => {
    const filterQueries = req.query;
    try {
        const user = await User.findOne({ _id: req._id })

        const query = {};
        // query.isNormalPaid = true
        // query.isUrgentPaid = true
        // query.isDuplicatePaid = true
        // Construct the query object based on filterQueries
        if (filterQueries.course && filterQueries.course !== 'all') {
            query.course = filterQueries.course;
        }
        if (filterQueries.fullName && filterQueries.fullName !== '') {
            query.fullName = filterQueries.fullName;
        }
        if (filterQueries.regNumber && filterQueries.regNumber !== '') {
            query.regNumber = filterQueries.regNumber;
        }

        const clclist = await CLC.find(query)
        res.render("clc-list", { user, clclist })
    } catch (error) {
        console.log("Error in clc list => ", error)
    }
}