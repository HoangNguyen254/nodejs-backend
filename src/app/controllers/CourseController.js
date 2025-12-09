const CourseModel = require('../../app/models/Course')
class SiteController {
    async show(req, res, next) {
        const { slug } = req.params
        try {
            const course = await CourseModel.findOne({ slug })
            if (!course) return res.send('Can not found course')
            return res.render('courses/show', { course: course.toObject() })
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        return res.render('courses/create')
    }
    async store(req, res, next) {
        const formData = {
            ...req.body,
            image: 'https://images.unsplash.com/photo-1734526040622-a3e96b679f80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
        const course = new CourseModel(formData)
        try {
            await course.save()
            return res.redirect('/')
        } catch (error) {
            next(error)
        }
        // return res.render('courses/create')
    }
    async edit(req, res, next) {
        try {
            const course = await CourseModel.findById(req.params.id)
            return res.render('courses/edit', { course: course.toObject() })
        } catch (error) {
            next(error)
        }
    }
    async update(req, res, next) {
        try {
            await CourseModel.updateOne({ _id: req.params.id }, req.body)
            return res.redirect('/me/stored/courses')
        } catch (error) {
            next(error)
            // return res.json({error:'Fail to update'})
        }
    }
    async delete(req, res, next) {
        try {
            const data = await CourseModel.deleteById(req.params.id)
            return res.json({ data })
            // return res.redirect('/me/stored/courses')
        } catch (error) {
            next(error)
            // return res.json({error:'Fail to update'})
        }
    }
    async restore(req, res, next) {
        try {
            const data = await CourseModel.restore({ _id: req.params.id })
            console.log('data2', data)

            return res.json({ data })
            // return res.redirect('/me/stored/courses')
        } catch (error) {
            next(error)
            // return res.json({error:'Fail to update'})
        }
    }
}
module.exports = new SiteController()
