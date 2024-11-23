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