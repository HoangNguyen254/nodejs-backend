const newsRouter = require('./news')
const siteRouter = require('./site')
function route(app) {
    // app.get('/', (req, res) => {
    //     return res.render('home', { name: 'Hoang Nguyen' })
    // })
    app.use('/', siteRouter)
    app.use('/news', newsRouter)
    // app.get('/search', (req, res) => {
    //     return res.render('search', { name: 'Hoang Nguyen' })
    // })
    // app.post('/search', (req, res) => {
    //     const data = req.body
    //     res.send('')
    // })
}

module.exports = route
