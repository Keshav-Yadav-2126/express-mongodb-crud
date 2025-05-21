const fs = require("fs");
const { Product } = require("../models/productModel.js")

const addProduct = async(req,res) =>{
    const productInfo = req.body;
    const product = await Product.create(productInfo);
    console.log(product)
    res.send(product)
}

module.exports = {addProduct}