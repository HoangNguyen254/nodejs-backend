const CourseModel = require('../models/Course')
class MeController {
    async storedCourses(req, res, next) {
        try {
            const courses = await CourseModel.find({ deletedAt: null })
            return res.render('me/stored-courses', {
                courses: courses.map((item) => item.toObject()),
            })
        } catch (error) {
            next(error)
        }
    }
    async trashCourses(req, res, next) {
        try {
            const courses = await CourseModel.find({ deleted: true })
            return res.render('me/trash-courses', {
                courses: courses.map((item) => item.toObject()),
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = new MeController()
