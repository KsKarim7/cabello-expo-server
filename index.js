const cors = require('cors');
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express()

// middlewares 
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send('Hey I am your Barber')
})

app.listen(port, () => {
    console.log(`Exploring on port ${port}`)
})