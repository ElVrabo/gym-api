import { Router } from "express";
import { getAllExercises, addExcercise, deleteExcercise } from "../controllers/exercises.controller.js";
import { authRequired } from "../middlewares/validatorToken.js";


const excerciseRoutes = Router()

excerciseRoutes.get('/excercises',authRequired, getAllExercises)
excerciseRoutes.post('/excercises',authRequired, addExcercise)
excerciseRoutes.delete('/ecxercises/:id', deleteExcercise)

export default excerciseRoutes