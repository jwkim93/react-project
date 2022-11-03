const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jwkim:wldns879!@jwkim.ttujucn.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
app.get('/', (req, res) => {
  res.send('Hello World! 나는 김지운 멋쟁이죠')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})