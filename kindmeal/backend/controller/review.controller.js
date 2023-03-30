const express = require("express")
const ReviewModel = require("../model/review.model")
const reviewRouter = express.Router()

reviewRouter.post("/add",async (req, res)=>{
    const newData = await ReviewModel.insertMany(req.body)
          res.send({
             msg:"Yahoo!, Product added suceesfully"
          })
 })
 module.exports = reviewRouter