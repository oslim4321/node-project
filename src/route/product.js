const express = require("express");
const { getAllProduct } = require("../controller/product");

const router = express.Router();

router.get("/getAllProduct", getAllProduct);

module.exports = router;
