const { schema } = require("../validations/productValidation.js");

const validateProduct = (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    convert: true,
    abortEarly: false
  });

  if (error) {
    return res.status(400).json({
      status: "fail",
      errors: error.details.map(err => err.message)
    });
  }

  req.body = value;
  next();
};

module.exports = validateProduct;
