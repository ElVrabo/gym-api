import { Router } from "express";
import { getAllExercises, createExcercises } from "../controllers/exercises.controller.js";


const excerciseRoutes = Router()

excerciseRoutes.get('/excercises', getAllExercises)
excerciseRoutes.post('/excercises', createExcercises )

export default excerciseRoutes