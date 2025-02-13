export const index = async (req, res) => {
    try {
        res.status(200).render("index")
    } catch (error) {
        console.log("Error in static page controller index", error)
        res.status(500).render("error-page")
    }
}
export const contact = async (req, res) => {
    try {
        res.status(200).render("index")
    } catch (error) {
        console.log("Error in static page controller index", error)
        res.status(500).render("error-page")
    }
}