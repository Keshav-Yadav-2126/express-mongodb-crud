const { bgRed } = require("colorette");
const { Product } = require("../models/productModel.js");

const deleteProduct = async(req, res) => {
    try {
        const userId = req.params.id;
        const productDlt = await Product.findByIdAndDelete(userId);
        if(productDlt){
            console.log("Data deleted.")
            res.status(200).json({product: productDlt});
        }
        else{
            console.log("data not found");
        }
    } catch (err) {
        console.log(bgRed("Error while Deleting: ", err))
    }
}

module.exports = { deleteProduct }