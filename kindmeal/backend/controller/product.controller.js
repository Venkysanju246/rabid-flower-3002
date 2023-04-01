const express = require("express")
const ProductModel = require("../model/products.route")
const productRouter = express.Router()

productRouter.post("/add", async (req, res) => {
   const newData = await ProductModel.insertMany(req.body)
   res.send({
      msg: "Yahoo!, Product added suceesfully"
   })
})
productRouter.get("/get", async (req, res) => {
   const newData = await ProductModel.find()
   res.send({
      data: newData
   })
})

module.exports = productRouter