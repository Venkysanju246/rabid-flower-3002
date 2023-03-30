const express = require("express")
const ProductModel = require("../model/products.route")
const productRouter = express.Router()

productRouter.post("/add",async (req, res)=>{
   const newData = await ProductModel.insertMany(req.body)
         res.send({
            msg:"Yahoo!, Product added suceesfully"
         })
})

module.exports = productRouter