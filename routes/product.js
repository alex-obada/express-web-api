import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await prisma.product.findMany();
  res.status(200).send(products);
});

router.post("/", async (req, res) => {
  const { description, store, barcode } = req.body;
  const product = {
    description: description,
    store: store,
    barcode: barcode,
    created: new Date(),
  };
  const newProduct = await prisma.product.create({ data: product });
  res.status(201).send(newProduct);
});

export default router;
