const { Product } = require("../models/productModel");

const allProducts = async (req,res) =>{
    const allProducts = await Product.find({});
    res.send(allProducts);
}

module.exports = { allProducts };