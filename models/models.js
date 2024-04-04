const mongoose = require("mongoose")

const HouseSchema = new mongoose.Schema({
  createdAt: {
  type: Date,
  default: Date.now()
  },
  type: {
    type: String,
    required: [true, "Please provide house status."],
    enum: ["apartment", "villa"]
  },
  status: {
    type: String,
    required: [true, 'Please provide the house type.'],
    enum: ["buy", "rent"]
  },
  roomsCount: {
    type: Number,
    required: [true, "Please provide the rooms count"],
    min: 1,
    max: 8
  },
  meterage: {
    type: Number,
    required: [true, "Please provide the house meterage."],
  },
  price: {
    type: Number,
    required: function(){
      return /^\$?\d+(,\d{3})*(\.\d{2})?$/.test(this.price)
    }
  },
  city: {
    type: String,
    required: [true, "City is required."]
  },
  warehouse: {
    type: Boolean,
    required: [true, "Warehouse field is required."],
    default: false
  },
  yard: {
    type: Boolean,
    required: [true, "Yard field is required"],
    default: false
  },
  parking: {
    type: Boolean,
    required:  [true, "Parking field is required."],
    default: false
  },
  description: {
    type: String,
    required: [true, "Description of the is required."]
  }
})

const House = mongoose.model("House", HouseSchema)

module.exports = { House }