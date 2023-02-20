const express = require('express');
// const v1WorkoutRouter = require('./v1/routes/workoutRoutes');
const clientsRoutes = require("./v1/routes/clientRoutes");
const bodyParser = require("body-parser");
// conexión con mongoose
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// conexion
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/clients", clientsRoutes);

// ruta

const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

// app.use("/api/v1/Workouts", v1WorkoutRouter);
mongoose.set('strictQuery', true);

// mongodb
// mongoose.connect("mongodb://127.0.0.1:27017/pedidos", connectionOptions)
mongoose.connect("mongodb+srv://lilyjohana:cuarteto.F29@cluster0.7qysvaj.mongodb.net/test", connectionOptions)
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

// mongoose.connect(process.env.MONGODB_URI)
//     .then(() => console.log("Conectado a MongoDB Atlas"))
//     .catch((err) => console.error(err))

app.listen(PORT, () => { console.log(`🚀 server listening on port ${PORT}`) });

process.on('uncaughtException', function (err) {
    console.log(err);
});