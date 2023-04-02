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
productRouter.delete("/delete/:id", async (req, res) => {
   let id = req.params.id
   console.log(id)
   let deleted = await ProductModel.findByIdAndDelete({ _id: id })
   res.send({
      msg: "Product Deleted Successfully"
   })

})

module.exports = productRouter