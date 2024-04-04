const express = require('express');
const {House} = require("../models/models")
const router = express.Router();

/* GET house listing. */
router.get('/', async(req, res) => {
  // res.send('respond with a resource');
  const all = await House.find()
  return res.json(all)
});

router.post("/submit", async (req, res) => {
  try {
    console.log(req.body)
    const result = await House.create(req.body)
    return res.json(result)
  } catch(e){
    return res.status(400).json({
      ok: false,
      error: e.name,
      message: e.message
    })
  }
})

router.post("/find", async (req,res) => {
  try {
    const { id } = req.body
    if(!id) return res.status(400).json({
      ok: false,
      message: "id is not set"
    })
    const result = await House.findById(id)
    return res.json(result)
  } catch(e){
    return res.status(400).json({
      ok: false,
      error: e.name,
      message: e.message
    })
  }
})

router.post("/update", async(req, res) => {
  try{
    const { id, ...some } = req.body
    if(!id) return res.status(400).json({
      ok: false,
      message: "id was not set"
    })
    console.log(some)
    const house = await House.findOneAndUpdate({ _id: id }, some, {
      new: true,
      upsert: true
    })
    return res.json(house)
  } catch(e){
    return res.status(400).json({
      ok: false,
      error: e.name,
      message: e.message
    })
  }
})

module.exports = router;
