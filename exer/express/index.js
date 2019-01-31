var express = require('express')

var app = express()

app.get('/hello', (req,res)=>{
    res.sendFile('express/index.html')
})

app.listen(3000)