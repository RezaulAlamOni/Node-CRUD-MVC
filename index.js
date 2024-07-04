const express = require('express');
const mongoose = require('mongoose');
const productsRouter = require('./routes/products.route');
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routers
app.use('/api/products', productsRouter);

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
    })
    .catch(() => {
        console.log("Connection failed!");
    });