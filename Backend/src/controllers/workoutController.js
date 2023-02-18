const workourtService = require("../services/workoutService");


const getAllWorkouts = (req, res) => {
    const allWorkouts = workourtService.getAllWorkouts(); 
    res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const {
        params: { workourId },
    } = req;

    if (!workourId) {
        return;
    }

    const workout = workourtService.getOneWorkout(workourId);
    res.send({ status: "OK", data: workout });

};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.contact ||
        !body.address 
    ) {
        res.status(400)
            .send({
                status: "FAILED",
                data: {
                error: "one of the following keys is missing or is empty in request body: 'name' 'contact' or 'address'" 
            }
        });
    }

    const newWorkouts = {
        name: body.name,
        contact: body.contact,
        address: body.address
    };

    const createdWorkout = workourtService.createNewWorkout(newWorkouts);
    res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
    const {
        body,
        params: { workourId },
    } = req;

    if (!workourId) {
        return;
    }

    const updatedWorkout = workourtService.updateOneWorkout(workourId, body);
    res.send({ status: "OK", data: updatedWorkout });
};

const deleteOneWorkout = (req, res) => {
    const {
        params: { workourId },
    } = req;

    if (!workourId) {
        return;
    }

    workourtService.deleteOneWorkout(workourId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};