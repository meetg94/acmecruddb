const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    department: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Employee', employeeSchema)