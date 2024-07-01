const express = require('express');
const app = express();

app.use(express.json());

const products = [
    {
        id: 1,
        name: 'Mobile',
        price: 56000,
        quantity: 1
    },
    {
        id: 2,
        name: 'Laptop',
        price: 69000,
        quantity: 1
    },
    {
        id: 3,
        name: 'Bag',
        price: 2000,
        quantity: 2
    }
];

app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product);
    res.send({
        message: 'Product added successfully',
        payload: products
    });
});



app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});