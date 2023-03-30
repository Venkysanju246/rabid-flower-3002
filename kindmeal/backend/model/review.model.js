
const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    personimg:String,
    name:String,
    image:Array
})

const ReviewModel = mongoose.model("review", reviewSchema)

module.exports = ReviewModel
