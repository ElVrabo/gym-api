import { Router } from "express"
import { registerUser, signIn, verifyToken } from "../controllers/auth.controller.js"
const authRoutes = Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/signIn', signIn)
authRoutes.get('/verifyToken', verifyToken)


export default authRoutes