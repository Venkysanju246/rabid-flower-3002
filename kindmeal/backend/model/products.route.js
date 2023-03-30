const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title:String,
    bgimage:String,
    profile:String,
    mainimg:String,
    cat:String,
    NormalPrice:String,
    Discount:String
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel