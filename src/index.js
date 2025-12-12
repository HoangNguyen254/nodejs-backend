const express = require('express')
const morgan = require('morgan')
const path = require('path')
const db = require('./config/db')
const handlebars = require('express-handlebars')
const overrideMethod = require('method-override')
const route = require('./routes')
const SortMiddleware = require('./app/middleware/SortMiddleware')
// Connect to moongo db
db.connect()
const port = 3000
const app = express()

//logger
app.use(morgan('combined'))
//override method
app.use(overrideMethod('_method'))
// CUstom middleware
app.use(SortMiddleware)
//view engine
const handlebarsInstance = handlebars.create({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        sortable: (field, sort) => {
            console.log('sort', sort)

            const types = {
                default:
                    '<a href="?_sort&column=name&type=asc"><img style="width: 20px;height:20px" src="/vendor/ionicons/arrow-up.svg" alt="svg" /></a>',
                desc: '<a href="?_sort&column=name&type=asc"><img style="width: 20px;height:20px" src="/vendor/ionicons/arrow-up.svg" alt="svg" /></a>',
                asc: '<a href="?_sort&column=name&type=desc"><img style="width: 20px;height:20px" src="/vendor/ionicons/arrow-down.svg" alt="svg" /></a>',
            }
            const type = types[sort.type]
            return type
        },
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
