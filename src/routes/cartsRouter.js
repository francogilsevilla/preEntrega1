import {Router} from "express";
import CartManager from "../class/cartManager.js";
import ProductManager from "../class/productManager.js";

const router = Router();

const cartManager = new CartManager("cart.json");
const carts = cartManager.getCarts()

router.post("/", (req,res) =>{
    res.send(cartManager.addCart())
})

router.get("/:cid", (req,res) =>{
    res.send(cartManager.getProducts(req.params.cid))
});

router.post("/:cid/product/:pid", (req,res) =>{
    const {cid,pid}= req.params;

    res.send(cartManager.addProduct(Number(cid), Number(pid)))
})

export default router;