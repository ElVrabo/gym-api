import { Router } from "express";
import { calendaryData, deleteEvents, getEvents } from "../controllers/calendary.controller.js";
import { authRequired } from "../middlewares/validatorToken.js";



const calendaryRoutes = Router();

calendaryRoutes.post('/calendary',authRequired, calendaryData)
calendaryRoutes.get('/calendary', authRequired,getEvents)
calendaryRoutes.delete('/calendary/:id', deleteEvents)

export default calendaryRoutes