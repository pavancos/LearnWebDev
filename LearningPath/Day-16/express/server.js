// Import Express Module
const exp = require('express');
const app = exp();

const {MongoClient} = require('mongodb');
let mClient = new MongoClient('mongodb://localhost:27017');
mClient.connect()
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Error while connecting to MongoDB',err);
});


app.get('/', (req, res) => {
    res.send('Welcome to Muiltiple APIs Server');
});

// Import User API
const userAPI = require('./APIs/userAPI');
app.use('/users', userAPI);

// Import Product API
const productAPI = require('./APIs/productAPI');
app.use('/products', productAPI);

// Assign Port Number to Server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});


