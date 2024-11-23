
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const authRequired = (req,res,next)=> {
    const authHeader = req.headers.authorization
    if(!authHeader){
        //  console.log('No existe ningun token')
        return res.status(401).json({message:"No hay token"})
    }else{
    const token = authHeader.split(' ')[1]; 
     /*Si si existe el token, con la propiedad verify de jwt se verificara ese token, se le
    pasara el TOKEN_SECRET, y un callback que se ejecuta si hay un error, y si todo sale bien
    me da los datos de ese token(usuario)*/
    jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        /*si existen un error el verificar el token va a responder con un 
        status 401 y un mensaje de token invalido*/
        if(err){
            // console.log('El token es invalido')
        return res.status(401).json({message:"token invalido"})  
        }else{
            // console.log('El usuario si esta autenticado')
        /*Si el token es verificado correctamente, se guardara ese usuario en req.user, que es
        la peticion del usuario que esta llegando, lo que hace que esten disponibles para cualquier
        controlador posteriores que manejen la solicitud, en este caso esta disponible para los
        controllers de products.controller*/
        req.user=user
     
    
        /*y continuara con la siguiente ruta, que es para agregar un producto al carrito*/
        next()
        }
        
        
    })
    } 
    
   
    }