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
export async function addExcercise(req,res){
   const {name,description} = req.body
   try {
    const createExcercise = new Excercise({
      name,
      description
    })
    const savedExcercise = await createExcercise.save()
    return res.json({message:'El ejercicio se agrego con exito'})
   } catch (error) {
      console.log('Ocurrio el siguiente error'), error
   }
}

export async function deleteExcercise(req,res){
   const {id} = req.params
   try {
      const foundExcerises = await Excercise.findByIdAndDelete(id)
      if(!foundExcerises){
         return res.status(404).json({error:"No se encontro el ejercicio"})
      }
        return res.status(201).json({message:"Se elimino correctamente el ejercicio"})
   } catch (error) {
      console.log('Ocurrio el siguiente error', error)
   }
}