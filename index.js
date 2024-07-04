const express = require('express');
const mongoose = require('mongoose');
const Product = require("./Model/product.model");
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

        app.post('/api/products', async (req, res) => {
            try {
                const product = await Product.create(req.body); // create Product
                return res.status(200).send(product);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });


    })
    .catch(() => {
        console.log("Connection failed!");
    });