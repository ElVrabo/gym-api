import Excercise from "../models/exercises.model.js"

export async function getAllExercises(req,res){
   try {
    const foundExcerises = await Excercise.find()
    if(foundExcerises.length > 0){
       return res.status(200).json(foundExcerises)
    }
      return res.status(404).json({error:"No se encontro ningun ejercicio"})
   } catch (error) {
    console.log('Ocurrio el siguiente error', error)
   }
}

export async function createExcercises(req,res){
    try {
        /*insertMany inserta varios documentos de una sola vez*/
     const excercises = await Excercise.insertMany([
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41oeWg5Kn_3RFShvWECiI3wL6YFQwCBg1gQ&s',
            name:'Abdominales',
            details:'Las abdominales ayudan a bajar de peso y marcarse'

        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41oeWg5Kn_3RFShvWECiI3wL6YFQwCBg1gQ&s',
            name:'Abdominales',
            details:'Las abdominales ayudan a bajar de peso y marcarse'

        }
     ]) 
     return res.status(201).json({message:"Se insertaron los ejercicios bien"})
    } catch (error) {
     console.log('Ocurrio el siguiente error', error)
    }
}