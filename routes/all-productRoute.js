const express = require("express");
const { allProducts } = require("../controllers/all-Products.js");
const allRoutes = express.Router();

allRoutes.get("/api/products",allProducts)

module.exports = { allRoutes };