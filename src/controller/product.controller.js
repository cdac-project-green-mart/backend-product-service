import Product from "../model/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Not Found" });

    return res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
