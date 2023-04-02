const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UserModel = mongoose.model("kinduser", userSchema)

module.exports = UserModel