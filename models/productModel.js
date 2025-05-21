const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    productTitle:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required: true
    }
},{timestamps:true})

const Product = mongoose.model("products", productSchema);

module.exports = { Product }