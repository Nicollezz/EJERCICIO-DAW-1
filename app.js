const express = require('express');
const app = express();
const port = 3000;


app.listen(port, ()=>{
    console.log(`Servidor está escuchando en http://localhost:${port}`);
});

