const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('productsDB', null, null, {
    dialect: 'sqlite',
    storage: './resources/products.sqlite3'
});

class Products extends Sequelize.Model {
    getAllProducts() {
        return sequelize.sync().then(() => Products.findAll());
    }

    createProduct(product) {
        sequelize.sync()
            .then(() => Products.findOrCreate({
                where: {ean: product.ean},
                defaults: {
                    ean: product.ean,
                    name: product.name,
                    category: product.category,
                    urls: product.urls,
                    image: product.image,
                }
            })).then((result) => {
            if (!result[1]) {
                console.log("Product already exists");
            } else {
                console.log("Created");
            }

        });
    }

    updateProduct(product) {
        sequelize.sync()
            .then(() => Products.update(product, {where: {ean: product.ean}}).then((result) => {
                console.log(result);
            }));
    }
}

Products.init({
    ean: Sequelize.STRING,
    name: Sequelize.STRING,
    category: Sequelize.STRING,
    urls: Sequelize.BLOB,
    image: Sequelize.BLOB
}, {sequelize, modelName: 'products'});

module.exports = Products;