import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
export async function connectDB(){
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9fxfoaa.mongodb.net/?retryWrites=true&w=majority`,{
            dbName: 'api-gym'
        })
        console.log('Base de datos conectada con exito')
    } catch (error) {
        console.log('Ocurrio el siguiente error', error)
    }
}