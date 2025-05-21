const joi = require("joi")

const schema = joi.object({
    productName: joi.string().strict().required().messages({
        "string.base": "Product name must be a string",
        "any.required": "Product name is required"
    }),
    productTitle: joi.string().min(10).max(50).required().messages({
        "string.base": "Product title must be a string",
        "any.required": "Product title is required"
    }),
    productPrice: joi.number().required()
})  

module.exports = { schema }
