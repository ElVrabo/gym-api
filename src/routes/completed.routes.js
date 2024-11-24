import { Router } from "express";
import { authRequired } from "../middlewares/validatorToken.js";
import { completedEvent, getCompletedEvents } from "../controllers/completed.controller.js";


const completedRoutes = Router()

completedRoutes.post('/completed', authRequired, completedEvent)
completedRoutes.get('/completed', authRequired,getCompletedEvents)
export default completedRoutes