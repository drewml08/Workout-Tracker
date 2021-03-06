const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  distance: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  }
});

module.exports = ExerciseSchema;
