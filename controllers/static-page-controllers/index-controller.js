import Notice from "../../models/admin-models/notice-model.js"

export const index = async (req, res) => {
    try {
        const notices = await Notice.find()
        res.status(200).render("index", { notices })
    } catch (error) {
        console.log("Error in static page controller index", error)
        res.status(500).render("error-page")
    }
}
export const contact = async (req, res) => {
    try {
        res.status(200).render("index")
    } catch (error) {
        console.log("Error in static page controller contact", error)
        res.status(500).render("error-page")
    }
}

export const about = async (req, res) => {
    try {
        res.status(200).render("about")
    } catch (error) {
        console.log("Error in static page controller index", error)
        res.status(500).render("error-page")
    }
}

export const notice = async (req, res) => {
    try {
        res.status(200).render("notice")
    } catch (error) {
        console.log("Error in static page controller index", error)
        res.status(500).render("error-page")
    }
}