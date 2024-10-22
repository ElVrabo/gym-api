import User from "../models/auth.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { token } from "morgan"
dotenv.config()

export async function registerUser(req,res){
    const {username,email,password1,password2,date} = req.body
    try {
        const userFound = await User.findOne({username})
        if(userFound){
            return res.status(404).json({error:"El usuario ya existe"})
        }
        if (password1 != password2){
            return res.status(404).json({error:"Las contraseñas no coinciden"})
        }
        const passwordHash = await bcrypt.hash(password1,10)
        const newUser =  new User({
            username,
            email,
            password: passwordHash
        })
        const saveUser = await newUser.save()
        return res.status(201).json({message:'El usuario fue creado con exito'})
    } catch (error) {
        console.log('Ocurrio el siguiente error', error)
    }
}

export async function signIn(req,res){
const {username,password} = req.body
try {
    const userFound = await User.findOne({username})
    if(!userFound) {
       return res.status(404).json({error:"El usuario no existe"})
    }
    const isMatch = await bcrypt.compare(password, userFound.password)
    if(!isMatch){
        return res.status(404).json({error:"La contraseña es incorrecta"})
    }
    const token =  jwt.sign({id:userFound._id},process.env.TOKEN_SECRET, {expiresIn:'1d'} )
    return res.status(200).json(
        {message:"El usuario inicio sesion correctamente", token:token},
        
    )

} catch (error) {
    console.log('Ocurrio el siguiente error', error)
}
}

export async function verifyToken(req,res){
  /*se guarda la propiedad authorization que viene en el header de la solicitud*/ 
    const authHeader = req.headers.authorization;
      // Verifica que el token esté presente y que sea de tipo Bearer
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1]; // Obtén el token eliminando el 'Bearer'

    // Verificar el token
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token no válido' });
      }
      const userFound = await User.findById(user.id)
      if(!userFound){
        return res.status(401).json({error:"Usuario no autorizado"})
      }
      return res.status(200).json({user:userFound})
    });
  } else {
    return res.status(401).json({ message: 'No se proporcionó un token' });
  }
}