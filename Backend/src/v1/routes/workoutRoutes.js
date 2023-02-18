const express = require('express');
const router = express.Router();
const workoutController = require("../../controllers/workoutController")

router
    .get('/', workoutController.getAllWorkouts)
    .get('/:workourId', workoutController.getOneWorkout)
    .post('/', workoutController.createNewWorkout)
    .patch('/:workourId', workoutController.updateOneWorkout)
    .delete('/:workourId', workoutController.deleteOneWorkout);

module.exports = router;

