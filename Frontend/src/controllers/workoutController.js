const workourtService = require("../services/workoutService");


const getAllWorkouts = (req, res) => {
    const allWorkouts = workourtService.getAllWorkouts(); 
    res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const Workouts = workourtService.getOneWorkout(req.params.workourId);
    res.send(`Get workouts ${req.params.workourId}`);
};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkouts = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createdWorkout = workourtService.createNewWorkout(newWorkouts);
    res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
    const updatedWorkouts = workourtService.updateOneWorkout(req.params.workourId);
    res.send(`Update workouts ${req.params.workourId}`);
};

const deleteOneWorkout = (req, res) => {
    workourtService.deleteOneWorkout(req.params.workourId);
    res.send(`Delete workouts ${req.params.workourId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};