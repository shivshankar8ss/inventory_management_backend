import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: String,
  image_url: String,
  description: String,
  quantity: Number,
  price: Number,
});

export default mongoose.model("Product", productSchema);
