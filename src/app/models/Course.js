const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Course = new Schema({
    title: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    slug: { type: String, default: null },
    videoId: { type: String, default: null },
})
module.exports = mongoose.model('Course', Course)
