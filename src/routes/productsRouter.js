import { Router } from "express";
import ProductManager from "../class/productManager.js";
const router = Router();
let manager = new ProductManager("products.json");
let products = manager.getAllProducts();

router.get("/", (req,res) =>{
    const{limit} = req.query;
    if(Number(limit)){
        res.json(products.slice(0, limit));
    }else{
        res.json(products);
    }
})

router.post("/", (req,res) =>{
    let product = req.body;
    res.send(manager.addProduct(product));
})

router.put("/:pid", (req,res) =>{
    let modifyProduct = req.body;
    res.send(manager.updateProduct(Number(req.params.pid), modifyProduct));
})

router.delete("/:pid", (req,res) =>{
    res.send(manager.deleteProduct(Number(req.params.pid)))
})

export default router;