const express = require( "express")
const morgan = require("morgan")
const app = express()
app.use(morgan('dev'))
app.use(require('./routes/routes.js'))
app.set('port',process.env.PORT || 4000)

"__________Middlewares _______"
const mycon = require("express-myconnection")
const mysql = require("mysql")

const dboption = {
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'abc123',
    database : 'ejemplo'
}
app.use(mycon(mysql,dboption,'single'))



module.exports = app