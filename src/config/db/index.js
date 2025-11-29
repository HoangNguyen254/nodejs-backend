const mongoose = require('mongoose')
async function connect() {
    console.log('connecting to db....')
    try {
        await mongoose.connect(
            'mongodb+srv://huyhoang25041999_db_user:cZhS3N35QNRB2XHJ@cluster0.rsbgf5j.mongodb.net/',
            { dbName: 'f8_education_dev' },
        )
        console.log('Connected to database successfully!')
    } catch (error) {
        console.log('Error connecting to database', error)
    }
}
module.exports = {
    connect,
}
