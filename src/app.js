import express from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import cors from "cors"
import excerciseRoutes from './routes/excercise.routes.js'

const app = express()

connectDB()

app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(express.json())
app.use(morgan("dev"))


app.use('/api', authRoutes)
app.use('/api', excerciseRoutes)




export default app