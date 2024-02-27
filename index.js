const express = require('express')
const http = require("http")
const router = require('./routes/main.js')

const app = express()

app.use('/', router)

app.set('port', '3000')

const server = http.createServer(app)
server.listen(3000)