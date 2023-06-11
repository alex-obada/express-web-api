import express from "express";
import userRouter from "./routes/user.js";
import indexRouter from "./routes/index.js";
import productRouter from "./routes/product.js";
import priceRouter from "./routes/price.js";

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/price", priceRouter);
app.use("/api", indexRouter);
app.use(express.static("public"));

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port} \n`);
});
