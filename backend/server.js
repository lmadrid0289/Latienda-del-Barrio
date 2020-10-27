import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.get('/',(req,res) =>{
res.send('server running in 5000....');
})
app.use('/api/products',productRoutes)

app.use(notFound)
app.use(errorHandler)




app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV}.... on port ${PORT}`.yellow.bold))