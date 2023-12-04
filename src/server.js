import express from "express";
import productsRouter from "./routes/productsRouter.js";
import cartsRouter from "./routes/cartsRouter.js";

const app = express();
const port = 8080

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);

app.listen(port, () => console.log("Server listening on port 8080"));
