const mongoose = require("mongoose");

// mongodb connection =>
async function MongoConnnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Student");
    console.log("database connected....! ")
  } catch (error) {
    console.log("database did not connect cause of -> ", error)
  }
}

// Scheama => 
let Scheama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
)

// models =>
let Register = mongoose.model("Register", Scheama);

module.exports = { MongoConnnect, Register }