var http = require("http")
var fs = require('fs')

var initialText = "Hello There You want to create a new file using node"

fs.writeFile("createdFile", initialText, function(err){
    if(err){
        console.log(err)
    }
})

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'})

    var text = fs.readFileSync("readme.txt", "utf8")

    var text2= fs.readFileSync("createdFile", "utf8")

    response.end(text+text2)
}).listen(3000)

console.log('server is running port 3000')