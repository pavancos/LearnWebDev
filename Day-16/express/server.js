// Import Express Module
const exp = require('express');
const app = exp();

app.get('/', (req, res) => {
    res.send('Welcome to Muiltiple APIs Server');
});

// Import User API
const userAPI = require('./APIs/userAPI');
// If path starts with /user, then userAPI will be called
app.use('/user', userAPI);

// Import Products API
const productsAPI = require('./APIs/productsAPI');
// If path starts with /products, then productsAPI will be called
app.use('/products', productsAPI);

// Import Cart API
const cartAPI=require('./APIs/cartAPI');
// If path starts with /cart, the cartAPI will be called

// Assign Port Number to Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});


