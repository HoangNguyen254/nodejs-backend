const CourseModel = require('../../app/models/Course')
class SiteController {
    async index(req, res) {
        try {
            const courses = await CourseModel.find({})
            return res.status(200).json(courses)
        } catch (error) {
            console.error('error:', error)
            return res.status(400).json({ error: 'Fail to fetch courses!' })
        }

        // res.render('home')
    }
}
module.exports = new SiteController()
