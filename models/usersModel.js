const mongoose = require("mongoose")
const { validate } = require("email-validator")

const UsersSchema = new mongoose.Schema({
  joinedAt: {
    type: Date,
    default: Date.now()
  },
  username: {
    type: String,
    unique: true,
    min: 4,
    max: 12,
    required: [true, "Please provide the username."]
  },
  phone: {
    type: Number,
    unique: true,
    required: function(){
      return /^(\+98|0)?9\d{9}$/.test(this.phone)
    }
  },
  email: {
    type: String,
    unique: true,
    required: function(){
      return validate(this.email)
    }
  },
  password: {
    type: String,
    required: [true, "Please provide the password."],
  }
})

const Users = mongoose.model("Users", UsersSchema)
module.exports = { Users }