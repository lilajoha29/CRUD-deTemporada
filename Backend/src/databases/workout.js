const DB = require('./db.json')
const {saveToDatabase} = require('./utils')
// const workout = require("../models/clienteModel");

const getAllWorkouts = () => {
    return DB.workouts;
};

const getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (!workout) {
        return;
    }
    return workout;
};

const createdNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    

    if (isAlreadyAdded) {
        throw {
            status
        }
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

const updateOneWorkout = (workourId, changes) => { 
    const indexForUpdated = DB.workouts.findIndex((workout) => (workout.id === workourId)
    );
    if (indexForUpdate === -1) {
        return;
    }

    const updatedWorkout = {
        ...DB.workouts[indexForUpdated],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timezone: "utc" }),
    };

    DB.workouts[indexForUpdated] = updatedWorkout;
    saveToDatabase(DB);
    return updatedWorkout;
}

const deleteOneWorkout = (workourId) => { 
    const indexForDelete = DB.workouts.findIndex((workout) => workour.Id === workourId
    );
    if (indexForDelete === -1) {
        return;
    }
    
    DB.workouts.splice(indexForDelete, 1);
    saveToDatabase(DB);

}


module.exports = { getAllWorkouts, getOneWorkout, createdNewWorkout, updateOneWorkout, deleteOneWorkout };
