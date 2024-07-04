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

        // post product create
        app.post('/api/products', async (req, res) => {
            try {
                const product = await Product.create(req.body); // create Product
                return res.status(200).send(product);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // get all products
        app.get('/api/products', async (req, res) => {
            try {
                const products = await Product.find({});
                return res.status(200).json(products);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // get single product
        app.get('/api/product/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const product = await Product.findById(id);
                return res.status(200).json(product);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // update product
        app.put('/api/product/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const product = await Product.findByIdAndUpdate(id, req.body);
                if (!product) {
                    return res.status(404).json({ error: 'Product not found' });
                }
                const UpdatedProduct = await Product.findById(id);
                res.status(200).json(UpdatedProduct);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

        // delete product
        app.delete('/api/product/:id', async (req, res) => {
            const { id } = req.params;
            try {
                const product = await Product.findByIdAndDelete(id);
                if (!product) {
                    return res.status(404).json({ message: 'Product not found' });
                }
                res.status(200).json({message: 'Product deleted successfully' });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });

    })
    .catch(() => {
        console.log("Connection failed!");
    });