const express = require('express')
const morgan = require('morgan')
const indexRouter = require('./routes/movies.routes')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../../frontend/build')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())
app.use(indexRouter)

module.exports = app;