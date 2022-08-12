const mongoose = require('mongoose')

const comedianSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('teat', comedianSchema, 'Comedians')