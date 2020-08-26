const express = require('express')
const app = express()
const port = 3000
const contactController = require('./controller/contactController')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})