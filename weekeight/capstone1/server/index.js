require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, createUser, getUsers, getContacts, createContact, deleteContact, updateContact} = require('./controller.js')

app.use(express.json())
app.use(cors())


app.post('/seed', seed)


app.get('/contacts', getContacts)


app.post('/contacts', createContact)
app.delete('/contacts/:id', deleteContact)


app.post('/register', createUser)

app.get('/login', getUsers)

app.put('/contacts/:id', updateContact);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))


