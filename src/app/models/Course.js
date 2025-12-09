const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const Schema = mongoose.Schema
const Course = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 255 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, default: null },
        videoId: { type: String, default: null },
        deletedAt: { type: Date, default: null },
        deleted: { type: Boolean, default: false },
    },
    { timestamps: true },
)
Course.plugin(mongooseDelete, { deletedAt: true })
module.exports = mongoose.model('Course', Course)
