var express = require('express')
var app = express()
var cors = require('cors')
var dal = require('./dal.js')

app.use(express.static('public'))
app.use(cors())

// Create user account

app.get('/account/create/:name/:email/:password', (req,res) => {
    dal.create(req.params.name,req.params.email,req.params.password)
        .then((user) => {
            console.log(user)
            res.send(user)
        })
})



//all accounts 

app.get('/account/all', (req,res) => {
   dal.all()
    .then((docs) => {
        console.log(docs)
        res.send(docs)
    })
})

var port = 5000
app.listen(port, () => {
    console.log('Running on por:' + port)
})
