const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.json());

const url = 'mongodb+srv://onicse21:ZMgfrxnv1OsNN5vj@nodecruddb.5nuefq6.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=nodeCrudDB'
mongoose.connect(url)
    .then(() => {
        console.log("Connected to database!");
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });


        app.get('/oni', (req, res) => {
            res.send('Hello World! Oni');
        });


    })
    .catch(() => {
        console.log("Connection failed!");
    });