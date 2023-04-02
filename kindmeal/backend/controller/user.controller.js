const express = require("express")
const UserModel = require("../model/user.model")
// const app = express()
const userreg = express.Router()
const bcrypt = require("bcrypt")

// app.use(express.json())

userreg.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const checkUser = await UserModel.find({ name: name })
    if (checkUser.length == 0) {
        bcrypt.hash(password, 5, async (err, hash) => {
            const newUser = new UserModel({ name, email, password: hash })
            await newUser.save()

        })
        res.send({
            msg: "Registeration successful"
        })
    } else {
        res.send({
            msg: "Details exists Please use login feature"
        })
    }
})

userreg.get("/all", async (req, res) => {
    const data = await UserModel.find()
    res.send(data)
})

module.exports = userreg