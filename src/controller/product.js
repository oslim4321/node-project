const Product = require("../model/product");

const getAllProduct = async (req, res) => {
  try {
    const response = await Product.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProduct,
};
