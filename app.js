const express = require('express');
const app = express();

let PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log('Server Up'));

app.get('/', (req, res) => {
    res.send({ mensaje: `Server Up on PORT ${PORT}` });
})

app.get('/users', (req, res) => {
    res.send({ mensaje: `Aqui los users` });
})