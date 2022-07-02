const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/./Views/index.html')
})

app.use((req, res, next) => {
    res.status(404).send({ message: "No route found" })
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: "Internal server error" })
})

module.exports = app;