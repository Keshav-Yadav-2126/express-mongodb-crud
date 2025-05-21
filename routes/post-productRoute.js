const {Router} = require("express")
const { addProduct} = require("../controllers/add-Product.js")
const validateProduct = require("../middlewares/validateProduct.js")
const addRoute = Router();

addRoute.post("/api/products", validateProduct , addProduct)

module.exports = { addRoute }