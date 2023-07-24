const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/Student");

const studentSchema = new Schema({
  name: String,
  roll: String,
  branch: String,
  mobile: Number,
  imageLoc: String,
});
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
