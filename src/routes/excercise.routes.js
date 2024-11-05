import { Router } from "express";
import { getAllExercises, addExcercise, deleteExcercise } from "../controllers/exercises.controller.js";


const excerciseRoutes = Router()

excerciseRoutes.get('/excercises', getAllExercises)
excerciseRoutes.post('/excercises', addExcercise)
excerciseRoutes.delete('/ecxercises/:id', deleteExcercise)

export default excerciseRoutes