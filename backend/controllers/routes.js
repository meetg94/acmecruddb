const express = require('express')
const Model = require('../models/employee')

const router = express.Router()

router.post('/post', async (request, response) => {
    const employee = new Model({
        name: request.body.name,
        age: request.body.age,
        department: request.body.department
    })
    try {
        const employeeData = await employee.save()
        response.status(200).json(employeeData)
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
})

router.get('/', async (request, response) => {
    try {
        const data = await Model.find({})
        response.json(data)
    } catch(error) {
        response.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const data = await Model.findById(request.params.id)
        response.json(data)
    } catch(error) {
        response.status(500).json({ message: error.message })
    }
})

router.patch('/update/:id', async (request, response) => {
    try {
        const id = request.params.id
        const updatedData = request.body
        const options = { new: true }

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        response.send(result)
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (request, response) => {
    try {
        const id = request.params.id
        const data = await Model.findByIdAndDelete(id)
        response.send(`Document about ${data.name} has been deleted.`)
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
})

module.exports = router;