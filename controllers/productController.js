import Product from "../models/Product.js";

// logic fro adding a product
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product_id: product._id, message: "Product added" });
  } catch (err) {
    res.status(500).json({ message: "Error adding product", err });
  }
};

// logic for updating qunatity
export const updateQuantity = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error updating quantity", err });
  }
};

// logic for updatinf price
export const updatePrice = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { price: req.body.price },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error updating quantity", err });
  }
};

// logic for fetching thw added product
export const getProducts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", err });
  }
};

// fetching product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product", err });
  }
};
