const express = require('express')
const app = express()
const PORT = 8000


app.get('/',  (req, res)=>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT: ${PORT}`)
})