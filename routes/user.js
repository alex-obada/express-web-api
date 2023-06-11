import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).send(users);
});

router.post("/", async (req, res) => {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).send(user);
});

export default router;
