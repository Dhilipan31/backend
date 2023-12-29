const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        note: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('notes', noteSchema);