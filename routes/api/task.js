const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Load task Model
const Task = require("../../models/Task");

// @route   GET api/task/test
// @desc    Tests task route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Task Works" }));

// @route   GET api/task/all
// @desc    Get  tasks from all users
// @access  Public
router.get("/", (req, res) => {
  const errors = {};

  Task.find()
    .then(tasks => {
      if (!tasks) {
        errors.notasks = "Задач пока нет ";
        return res.status(404).json(errors);
      }
      res.json(tasks);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/task/:id
// @desc    Get  one task
// @access  Public

router.get("/:id", (req, res) => {
  const errors = {};
  Task.findById({ _id: req.params.id })
    .then(task => {
      if (!task) {
        errors.notask = "Такой задачи нет";
        return res.status(404).json(errors);
      }
      res.json(task);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/task
// @desc    Create task
// @access  Public
router.post("/", (req, res) => {
  const newTask = new Task({
    mainTask: req.body.mainTask,
    subTask: req.body.subTask
  });

  newTask.save().then(task => res.json(task));
});

// @route   PUT api/task
// @desc    Update task
// @access  Public
router.put("/:id", (req, res) => {
  const updTask = {
    mainTask: req.body.mainTask,
    subTask: req.body.subTask
  };

  Task.findOneAndUpdate(
    { _id: req.params.id },
    { $set: updTask },
    { new: true }
  ).then(task => res.json(task));
});

router.delete("/:id", (req, res) => {
  Task.findByIdAndDelete({ _id: req.params.id }).then(task =>
    res.json({ _id: req.params.id })
  );
});

module.exports = router;
