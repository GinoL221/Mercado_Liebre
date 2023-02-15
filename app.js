const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.listen(4000, () => {
    console.log("El servidor esta corriendo en https://localhost:4000");
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});