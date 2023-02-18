const express = require('express');
// const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
// conexión con mongoose
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;

// ruta
const clienteRoutes = require("./v1/routes/workoutRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

app.use(express.json());
// app.use("/api/v1/Workouts", v1WorkoutRouter);

// mongodb
mongoose.connect("mongodb://localhost:27017/pedidos", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

// conexion
app.use(cors());
app.use("/cliente", clienteRoutes);

app.listen(PORT, () => { console.log(`🚀 server listening on port ${PORT}`) });

process.on('uncaughtException', function (err) {
    console.log(err);
});