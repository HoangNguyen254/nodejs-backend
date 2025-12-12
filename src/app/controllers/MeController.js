const CourseModel = require('../models/Course')
class MeController {
    async storedCourses(req, res, next) {
        let courseQuery = CourseModel.find({})
        if (req.query?._sort !== undefined) {
            console.log('req', req.query?._sort)
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query?.type || 'asc',
            })
        }
        try {
            const courses = await courseQuery
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
