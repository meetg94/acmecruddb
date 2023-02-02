const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database connected')
})

const app = express()
app.use(cors())
const routes = require('./controllers/routes')

app.use(express.json())
app.use('/api/employees', routes)

app.listen(8080, () => {
    console.log(`Server started at 8080`)
})