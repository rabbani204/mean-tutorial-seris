var express = require('express')

app = express()

app.get('/', function(req, res){
     res.send('Hello World')
})


app.get('/user', function(req, res){
    res.send('User profile is showing')
})

console.log('app is running port 3000')

app.listen(8000)