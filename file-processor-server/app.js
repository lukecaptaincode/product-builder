const express = require('express');
const app = express();
const port = 1337;
const Products = require('./modules/Products');
const products = new Products();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/', (req, res) => {
    products.getAllProducts().then((response) => {
        res.send(response);
    });
});

app.post('/update', (req, res) => {
    products.createProduct(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}!`));