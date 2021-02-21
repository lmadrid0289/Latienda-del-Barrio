import jwt from 'jsonwebtoken'
import AsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = AsyncHandler(async(req, res, next) => {
    let token 


    if(req.headers.authorization && req.headers.authorization.startsWith('bearer'))
    {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
           
            console.error(error)
            res.send(401)
            throw new Error('Not authorized, no token failed')
            
        }

    }
    if (!token){
       
        res.send(401)
        throw new Error('Not authorized, no token')
    }
    
})

export  { protect }