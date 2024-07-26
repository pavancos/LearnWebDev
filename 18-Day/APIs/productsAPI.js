// Import Express Module and create a Router instance
const express = require('express');
const productsApp = express.Router();
const expressAsyncHandler = require('express-async-handler');

// Sample products data
// let productsData = [
//     { id: 1, name: 'Product 1', price: 1000 },
//     { id: 2, name: 'Product 2', price: 2000 },
//     { id: 3, name: 'Product 3', price: 3000 },
//     { id: 4, name: 'Product 4', price: 4000 }
// ];

// GET Request - Get all products
productsApp.get('/products',expressAsyncHandler( async (req, res) => {
    // res.json(productsData);
    let productsCollection = req.app.get('productsCollection');
    let products = await productsCollection.find().toArray();
    if (!products) {
        res.send({ message: "No Products Found" });
        return
    } else {
        res.send({
            message: "Products are Here",
            payload: products
        })
    }
}));

// GET Request by ID - Get a specific product
productsApp.get('/products/:id', async (req, res) => {
    let id = Number( req.params.id);
    let productsCollection = req.app.get('productsCollection');
    let product = await productsCollection.findOne({id:id});
    // let product = products.find(product => product.id == id);
    if (!product) {
        res.json({ message: 'Product not found' });
    } else {
        res.json(product);
    }
});

// POST Request - Add a new product
productsApp.use(express.json());
productsApp.post('/', (req, res) => {
    let product = req.body;
    productsData.push(product);
    res.json({ message: 'Product added successfully', payload: productsData });
});

// PUT Request - Update an existing product
productsApp.put('/:id', (req, res) => {
    let product = req.body;
    let index = productsData.findIndex(p => p.id == product.id);
    if (index == -1) {
        res.json({ message: 'Product not found' });
    } else {
        productsData[index] = product;
        res.json({ message: 'Product updated successfully', payload: productsData });
    }
});

// DELETE Request - Delete a product
productsApp.delete('/:id', (req, res) => {
    let id = req.params.id; // Use req.params.id for DELETE request
    let index = productsData.findIndex(p => p.id == id);
    if (index == -1) {
        res.json({ message: 'Product not found' });
    } else {
        productsData.splice(index, 1);
        res.json({ message: 'Product deleted successfully', payload: productsData });
    }
});

// Export the module
module.exports = productsApp;
