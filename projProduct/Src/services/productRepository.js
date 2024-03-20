const fs = require('fs');
const path = require('path');
const fileName = 'products.json';
filePath = path.join(__dirname, "..","database",fileName);

class productsRepository {
    static async getProducts() {
        return new Promise((resolve,reject) => {
            fs.readFile(filePath, 'utf-8', (err,data) => {
                if(err) {
                    if(err.code === "ENOENT"){
                        this.writeProductsToFile([]);
                        return [];
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    };


static async writeProductsToFile(products) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(filePath, JSON.stringify(products), (err) => {
            if(err) reject (err);
            console.log(`Data written to file: ${filePath}`);
             resolve(this.getAllProducts());
            })
        })
    }

    static async getAllProducts() {
        const products = await this.getProducts();
        return products;
    };

    static async createProduct (product) {
        const products = await this.getProducts();
        product.id = products.length + 1;
        products.push(product);
        const insertDB = await this.writeProductsToFile(products);
        return insertDB;
    };

    static async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === parseInt(id));
    }

    static async UpdateProduct (id,product) {
        const products = await this.getProducts();
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        }
        products[index] = product;
        const updateDB = await this.writeProductsToFile(products);
        return updateDB;
    };

    static async deleteProduct(id) {
        const products = await this.getProducts();
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index === -1) {
            return null;
        } else {
            products.splice(index, 1);
        }
        await this.writeProductsToFile(products);
        return index;
    };
};

module.exports = productsRepository;