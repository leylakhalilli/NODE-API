const express = require("express")

const app = express()
app.get('/', function (request, response) {
    response.send("hi leyla")
})

app.get('/about', function (request, response) {
    response.send("About Page")
})


app.get('/home', function (request, response) {
    response.send('this is leyla')
})

app.get('/date', function (request, response) {
    const newDate = new Date()
    response.send(newDate.toLocaleTimeString())
})


app.listen(3000, function () {

    console.log("localhost:3000")
})
