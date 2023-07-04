import express from "express";
const router = express.Router();

import productService from "../services/productService.js";
import priceService from "../services/priceService.js";

router.get("/", async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).send(products);
  } catch (e) {
    res
      .status(500)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
});

router.get("/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await productService.getById(productId);
    res.status(200).send(product);
  } catch (e) {
    res
      .status(500)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
});

router.get("/:productId/prices", async (req, res) => {
  const { productId } = req.params;
  try {
    const pricesForProduct = await priceService.getByProductId(productId);
    res.status(200).send(pricesForProduct);
  } catch (e) {
    res
      .status(500)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
});

router.post("/", async (req, res) => {
  const { description, barcode } = req.body;
  try {
    const newProduct = await productService.create({ description, barcode });
    res.status(201).send(newProduct);
  } catch (e) {
    res
      .status(400)
      .send({ error: `Product could not be created. Message: ${e.message}` });
  }
});

router.put("/:productId", async (req, res) => {
  const { productId } = req.params;
  const { description, barcode } = req.body;

  try {
    const product = await productService.update({
      id: productId,
      description: description,
      barcode: barcode,
    });
    res.status(200).send(product);
  } catch (e) {
    res
      .status(400)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
});

router.delete("/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await productService.deleteById(productId);
    res.status(200).send(product);
  } catch (e) {
    res
      .status(400)
      .send({ error: `Server error occurred. Message: ${e.message}` });
  }
});

export default router;
