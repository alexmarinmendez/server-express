const express = require('express');
const app = express();

let PORT = 8080 || process.env.PORT;
const server = app.listen(PORT, () => console.log('Server Up'));

app.get('/', (req, res) => {
    res.send({ mensaje: `Server Up on PORT ${PORT}` });
})