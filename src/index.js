const express = require('express')
const morgan = require('morgan')
const path = require('path')
const db = require('./config/db')
const handlebars = require('express-handlebars')
const overrideMethod = require('method-override')
const route = require('./routes')
// Connect to moongo db
db.connect()
const port = 3000
const app = express()

//logger
app.use(morgan('combined'))
//override method
app.use(overrideMethod('_method'))
//view engine
const handlebarsInstance = handlebars.create({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    },
})
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
