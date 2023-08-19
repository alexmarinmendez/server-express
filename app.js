const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config()

let PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log('Server Up'));

app.get('/', (req, res) => {
    res.send({ mensaje: `Server Up on PORT ${PORT}` });
})

app.get('/users', (req, res) => {
    res.send({ mensaje: `Mensaje para los users: ${process.env.MENSAJE}` });
})