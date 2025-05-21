const express = require("express")
const updateRoutes = express.Router()

const {updateProduct} = require("../controllers/update-Product.js")
const validateProduct = require("../middlewares/validateProduct.js")

updateRoutes.patch("/api/products/:id", validateProduct , updateProduct)

module.exports = { updateRoutes }