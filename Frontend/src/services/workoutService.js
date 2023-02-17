const Workout = require('../databases/workout');
const {v4: uuid} = require('uuid');

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
};
const allWorkouts = () => {
    return;
};
const getOneWorkout = () => {
    return;
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
const updateOneWorkout = () => {
    return;
};
const deleteOneWorkout = () => {
    return;
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
