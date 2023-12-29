const express = require('express')
const mongoose = require('mongoose')
const Cors = require('cors')
const dotenv = require('dotenv')

const {
    getNotes,
    createNote,
    deleteNote
} = require('./controller/nodeController')


dotenv.config()

//App config
const app = express();

const port = process.env.Port || 8000

const connectionURL = process.env.MONGO_URL

//Middleware

// convert to json
app.use(express.json());

app.use(Cors());

//DB config

mongoose.connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log('Running a server in ' + port))
    })
    .catch((err) => {
        console.log('Error - ' + err)
    })

//API

//get end -points
app.get('/notes', getNotes)

//post
app.post('/notes', createNote)

//delete
app.delete('/notes/:id', deleteNote)
















