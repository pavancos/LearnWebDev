// Import Express Module and create a Router instance
const express = require('express');
const productsApi = express.Router();
productsApi.use(express.json());
// Sample products data
let productsData = [
    { id: 1, name: 'Product 1', price: 1000 },
    { id: 2, name: 'Product 2', price: 2000 },
    { id: 3, name: 'Product 3', price: 3000 },
    { id: 4, name: 'Product 4', price: 4000 }
];

// GET Request - Get all products
productsApi.get('/', (req, res) => {
    res.json(productsData);
});

// GET Request by ID - Get a specific product
productsApi.get('/:id', (req, res) => {
    let id = req.params.id;
    let product = productsData.find(product => product.id == id);
    if (!product) {
        res.json({ message: 'Product not found' });
    } else {
        res.json(product);
    }
});

// POST Request - Add a new product
productsApi.use(express.json());
productsApi.post('/', (req, res) => {
    let product = req.body;
    productsData.push(product);
    res.json({ message: 'Product added successfully', payload: productsData });
});

// PUT Request - Update an existing product
productsApi.put('/:id', (req, res) => {
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
productsApi.delete('/:id', (req, res) => {
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
module.exports = productsApi;