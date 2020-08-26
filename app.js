const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { GeneralError, handleErrors } = require('./customException');

const port = 3000
const contactController = require('./controller/contactController')

app.get('/contacts', async (req, res, next) => {
    try {
        const result = await contactController.getAll()
        res.send(result)
    } catch (e) {
        next(e)
    }
})

app.post('/contacts', async (req, res, next) => {
    try {
        const result = await contactController.add(req.body)
        res.send(result).status(201)
    } catch (e) {
        next(e)
    }
})

app.get('/contacts', async (req, res, next) => {
    try {
        const result = await contactController.getAll()
        res.send(result)
    } catch (e) {
        next(e)
    }
})

app.get('/contacts/:mobile_number', async (req, res, next) => {
    try {
        const result = await contactController.get(req.params.mobile_number)
        res.send(result)
    } catch (e) {
        next(e)
    }
})

app.put('/contacts/:mobile_number', async (req, res, next) => {
    try {
        const result = await contactController.edit(req.params.mobile_number, req.body)
        res.send(result)
    } catch (e) {
        next(e)
    }
})


app.delete('/contacts/:mobile_number', async (req, res, next) => {
    try {
        const result = await contactController.remove(req.params.mobile_number)
        res.send(result)
    } catch (e) {
        next(e)
    }
})

app.use(handleErrors)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
