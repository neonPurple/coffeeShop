const express = require('express')
const app = express()
const PORT = 8000


app.get('/',  (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/create',  (req, res)=>{
    res.sendFile(__dirname + '/create.html')
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on PORT: ${PORT}`)
})

app.use(express.static('public'))