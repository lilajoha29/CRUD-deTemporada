const Workout = require('../databases/workout');
const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const allWorkouts = () => {
    return;
};
const getOneWorkout = (workourId) => {
    const workout = Workout.getOneWorkout(workourId);
    return workout;
};
const createNewWorkout = (newWorkout) => {
    const workourtToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timezone: "utc" }),
        updatedAt: new Date().toLocaleString("en-US", { timezone: "utc" }),
    }
    const createdWorkout = Workout.createNewWorkout(workourtToInsert);
    return createdWorkout;
};
const updateOneWorkout = (workourId, changes) => {
    const updatedWorkout = Workout.updateOneWorkout(workourId, changes);
    return updatedWorkout;
};
const deleteOneWorkout = (workourId) => {
    Workout.deleteOneWorkout(workourId);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
