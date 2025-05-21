const express = require("express")
const { deleteProduct } = require("../controllers/delete-Product.js")
const deleteRoutes = express.Router()

deleteRoutes.delete("/api/products/:id", deleteProduct)

module.exports = { deleteRoutes }