const { bgRed } = require("colorette");
const { Product } = require("../models/productModel.js");

const updateProduct = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;

        const productUdt = await Product.findByIdAndUpdate(userId, updatedData, { new: true })
        if (productUdt) {
            console.log("Data Updated")
            res.status(200).json({ updatedProduct: productUdt, message: "data updated" })
        }
        else {
            res.status(500).json({ message: "Product not found" })
        }
    } catch (error) {
        console.log(bgRed("error while update: ", error))
    }
}

module.exports = { updateProduct }