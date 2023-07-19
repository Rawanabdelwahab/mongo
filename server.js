import express from "express";
import { engine } from 'express-handlebars';
// import { students,name } from "./database/usersArray.js";
import studentRoutes from "./routes/studentRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/students')
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './template');

app.use('/student',studentRoutes)

app.use('/user',userRoutes)

app.listen(5000);