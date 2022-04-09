const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


dotenv.config();


//connected to db
mongoose.connect(process.env.DB_CONNECT,()=> console.log("connected to db"));

//Import Routes
const vehicleRoutes = require("./routes/vehicle");
const userRoutes = require("./routes/user");

//Middleware
app.use(express.json());
app.use(cors());

// Routes MiddleWare
app.use("/api/vehicles",vehicleRoutes);
app.use("/api/user",userRoutes);



app.listen(3000,()=> console.log("server up and running on the port 3000!"));
