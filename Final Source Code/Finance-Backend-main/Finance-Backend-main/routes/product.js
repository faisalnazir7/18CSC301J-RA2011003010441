import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/products", async (req,res) => {  // get request
    try{
        const products = await Product.find(); //We are grabbing the data from DB, once we have our Product we send a success result via 200 status to the front end
        res.status(200).json(products); // we are sending the products object to the front-end

    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;