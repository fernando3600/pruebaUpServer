const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3020

app.get('/', (req, res) => {
    res.send("holaaaaaaaaaass");
})

app.listen(port, () => {
    console.log(`Starting ${process.env.IP}${port}`);
})