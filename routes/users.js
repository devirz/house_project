const express = require("express")
const { Users } = require("../models/usersModel")
const router = express.Router()

router.get("/", async (req, res) => {
  const users = await Users.find()
  res.json(users)
})

router.post("/register", async (req, res) => {
  try {
    console.log(req.body)
    const result = await Users.create(req.body)
    return res.json(result)
  } catch(e){
    return res.status(400).json({
      ok: false,
      error: e.name,
      message: e.message
    })
  }
})

module.exports = router