const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  mainTask: {
    type: String,
    required: true
  },
  subTask: [
    {
      id: {
        type: String
      },
      subText: {
        type: String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model("task", TaskSchema);
