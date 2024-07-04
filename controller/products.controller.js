const Product = require("../Model/product.model");


const saveProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body); // create Product
        return res.status(200).send(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const  getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getSingleProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
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
}

const deleteProduct = async (req, res) => {
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
}

module.exports = {
    getProducts,
    saveProduct,
    getSingleProduct,
    update,
    deleteProduct
}