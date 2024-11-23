import { Router } from "express";
import { calendaryData } from "../controllers/calendary.controller.js";
import { authRequired } from "../middlewares/validatorToken.js";



const calendaryRoutes = Router();

calendaryRoutes.post('/calendary',authRequired, calendaryData)

export default calendaryRoutes