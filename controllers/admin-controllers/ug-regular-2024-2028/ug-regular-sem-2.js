import User from "../../../models/user-models/user-models.js";

export const ugRegularSem2_2024_2028_Adm_List = async (req, res) => {
    // const filterQueries = req.query;
    try {
        // Find the user based on request ID
        const user = await User.findOne({ _id: req._id });
        //   console.log(user)

        // Initialize the query object
        //   const query = {};
        //   let status = "All"

        // Construct the query object based on filterQueries
        //   if (filterQueries.isPaid && filterQueries.isPaid !== 'all') {
        //     query.isPaid = filterQueries.isPaid === 'true';
        //     if (query.isPaid == true) {
        //       status = "Paid"
        //     } else {
        //       status = "Unpaid"
        //     }
        //   }
        //   if (filterQueries.category && filterQueries.category !== 'all') {
        //     query.category = filterQueries.category;
        //     status += " " + query.category
        //   }
        //   if (filterQueries.gender && filterQueries.gender !== 'all') {
        //     query.gender = filterQueries.gender;
        //     status += " " + query.gender
        //   }

        // Find students based on the constructed query
        //   const ugRegularPart3AdmissionList = await ugRegularPart3AdmissionForm.find(query);



        // Render the template with the filtered list
        res.status(201).render('ug-regular-sem2-2024-2028-adm-list', { user, list: [] });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
}