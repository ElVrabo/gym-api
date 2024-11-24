import Calendary from "../models/calendary.model.js"

export async function calendaryData(req,res){
    const {description,date} = req.body
    console.log('descripcion',description)
    console.log('date',date)
    try {
     const newDate = new Calendary({
        description,
        date,
        user:req.user.id
     })
     const savedDate = await newDate.save()
     return res.status(200).json({message:"La fecha se guardo con exito"})
    } catch (error) {
     console.log('Ocurrio el siguiente error', error)
    }
}

export async function getEvents(req,res){
try {
    const eventsData = await Calendary.find({
        user:req.user.id
    })
    if(eventsData.length > 0){
        return res.status(200).json(eventsData)
    }
        return res.status(404).json({message:"No se encontro ningun ejercicio"})
} catch (error) {
    
}
}

export async function deleteEvents(req,res){
    const {id} = req.params;
    try {
      const foundEvent = await Calendary.findByIdAndDelete(id)
      if(!foundEvent){
        return res.status(404).json({message:"El evento no se encontro"})
      }
        return res.status(200).json({message:"El evento se elimino con exito"})
    } catch (error) {
        
    }
}