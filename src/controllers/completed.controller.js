import Completed from "../models/completed.model.js"

export async function completedEvent(req,res){
    const {description,date} = req.body
    try {
        const event = new Completed({
            description,
            date,
            user:req.user.id
        })
        const savedEvent = await event.save()
        return res.status(200).json({message:"El evento se guardo como completado"})
    } catch (error) {
        
    }
}

export async function getCompletedEvents(req,res){
    try {
     const foundCompletedEvents = await Completed.find({
        user:req.user.id
     })
     if(foundCompletedEvents.length > 0){
        return res.status(200).json(foundCompletedEvents)
     }
        return res.status(404).json({error:"No se encontro ningun evento completado"})
    } catch (error) {
        
    }
}