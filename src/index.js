const express = require('express');
const routes = require('./routes');
const cors = require('cors');
global.expiresIn = 300;
global.secret = 'wilsontools';

const app = express();
require('./config/db');

app.use(cors());
app.use(express.json());
app.use(routes);

//Outros
const port = process.env.PORT || 3333
app.listen(port, () => {
    console.log("Servidor rodando!");
})