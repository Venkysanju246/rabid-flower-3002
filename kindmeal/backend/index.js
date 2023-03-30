const express = require("express")
const connectiontodb = require("./connection/db")
const productRouter = require("./controller/product.controller")
const reviewRouter = require("./controller/review.controller")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use("/products", productRouter)
app.use("/review", reviewRouter)

app.listen(process.env.port, async ()=>{
    await connectiontodb
    console.log("conneted to db")
    console.log("server running")
})