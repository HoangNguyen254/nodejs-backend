const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const route = require('./routes')
const port = 3000
const app = express()
//logger
app.use(morgan('combined'))
//view engine
const handlebarsInstance = handlebars.create({ extname: '.hbs' })
app.engine('hbs', handlebarsInstance.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
//static
app.use(express.static(path.join(__dirname, 'public')))
// middleware
app.use(express.urlencoded({ extended: true })) //parse body data from post request send from client
app.use(express.json())
// route
       route(app)

app.listen(port, () => {
    console.log(`App is running on port: ${3000}`)
})
