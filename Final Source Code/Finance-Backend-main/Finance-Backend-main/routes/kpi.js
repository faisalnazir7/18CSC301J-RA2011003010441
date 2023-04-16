import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req,res) => {  // get request
    try{
        const kpis = await KPI.find(); // Grabbing info from DB.Once we have our KPI's we send a success result via 200 status to the front end
        res.status(200).json(kpis); // we are sending the kpis object to the front-end

    }catch(error){
        res.status(404).json({message: error.message});
    }
})

export default router;