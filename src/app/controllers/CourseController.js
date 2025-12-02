const CourseModel = require('../../app/models/Course')
class SiteController {
    async show(req, res, next) {
        const { slug } = req.params
        try {
            const course = await CourseModel.findOne({ slug })
            if (!course) return res.send('Can not found course')
            console.log('ccc', course)

            return res.render('courses/show', { course: course.toObject() })
        } catch (error) {
            // console.error('error:', error)
            next(error)
            // return res.status(400).json({ error: 'Fail to fetch courses!' })
        }

        // res.render('home')
    }
}
module.exports = new SiteController()
