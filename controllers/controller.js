const Product = require("../models/products");
const asyncHandler = require("express-async-handler");

const view_Product = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Product.findById(userId);
    if (!user) {
      return res.status(404).json({ error: " Product not found" })
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch Product" })
  }
});

const view_All_Products = async (req, res) => {
  const users = await Product.find();
  res.status(200).json(users);
}

const insert_product = asyncHandler(async (req, res) => {
  const { name, brand, price } = req.body;
  try {
    const user = await Product.create({ name, brand, price });
    res.status(201).json({ user: "Product Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create Products" });
  }
});

const update_product = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, brand, price } = req.body;
    const updateProfile = await Product.findByIdAndUpdate(
      userId,
      { name, brand, price },
      { new: true }
    );
    if (!updateProfile) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product updated", user: updateProfile });
  } catch (error) {
    console.log(error);
  }
};


const delete_product = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(userId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete" });
  }
};

module.exports = {
  view_Product,
  view_All_Products,
  insert_product,
  update_product,
  delete_product
}