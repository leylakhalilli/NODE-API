const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")

const app = express()
app.use(express.json())
const data = [
    { "id": 2, name: "Leyla" },
    { "id": 3, name: "Inci" },
    { "id": 4, name: "Rahid" },
    { "id": 5, name: "Sara" },
    { "id": 6, name: "Zehra" },
    { "id": 7, name: "Fiko" }
]



//Lesson 3 task
const card = [
    { "id": 1, "num": 000000 },
    { "id": 2, "num": 111111 },
    { "id": 3, "num": 222222 },
    { "id": 4, "num": 333333 },
    { "id": 5, "num": 444444 },
    { "id": 6, "num": 555555 }

]

app.get('/card/:id',function(request,response){
    let data=card.find((elem)=>(elem.id==request.params.id))
    if(data){
        response.status(200).json(data)
    } 
    response.status(400).json("error")
})


app.get('/card/',function(request,response){
    let id=request.query.id
    if(id){
        let data=card.find((elem)=>(elem.id==id))
        if (data) {
            response.status(200).json(data)
        } else {
            response.status(400).json("Error ")
        }
    }
    let num=request.query.num
    if(num){
        let data=card.find((elem)=>(elem.num==num))
        if (data) {
            response.status(200).json(data)
        } else {
            response.status(400).json("Error num")
        }
    }
})


//

app.get('/', function (request, response) {
    response.send("hi leyla")
})

app.get('/about', function (request, response) {
    response.send("About Page")
})
//request params
app.get('/list/:id', function (request, response) {

    let company = data.find((elem) => (elem.id == request.params.id))
    if (company) {
        response.status(200).json(company)
    } else {
        response.status(400).json("ERROR")
    }


    // console.log(request.params)
    // response.json(request.params)
})
//request query
app.get('/users', function (request, response) {
    // response.json(request.query)

    let id = request.query.id

    if (id) {
        let company = data.find((elem) => (elem.id == id))
        if (company) {
            response.status(200).json(company)
        } else {
            response.status(400).json("Error")
        }
    }
    else {
        response.status(404).json("not found id")
    }



})

app.get('/host', function (request, response) {
    response.status(200).json(request.hostname)
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
