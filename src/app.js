import express from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import cors from "cors"
import excerciseRoutes from './routes/excercise.routes.js'
import calendaryRoutes from './routes/calendary.routes.js'
import expressPrometheusMiddleware from 'express-prometheus-middleware'
import completedRoutes from './routes/completed.routes.js'

const app = express()

connectDB()

app.use(cors({
    origin:"*",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
app.use(
    expressPrometheusMiddleware({
      metricsPath: '/metrics', // Ruta donde Prometheus recogerá las métricas
      collectDefaultMetrics: true, // Métricas estándar (CPU, memoria, etc.)
      requestDurationBuckets: [0.1, 0.5, 1, 1.5] // Opcional: Duraciones para peticiones
    })
  );
app.use(express.json())
app.use(morgan("dev"))


app.use('/api', authRoutes)
app.use('/api', excerciseRoutes)
app.use('/api',calendaryRoutes)
app.use('/api', completedRoutes)



export default app