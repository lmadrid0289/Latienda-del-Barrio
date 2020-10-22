import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import users from './data/users.js'
import Product from './models/productModel.js'
import User from './models/userModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import User from './models/userModel.js'

dotenv.config()

connectDB()

const importData = async () =>{
    try{
     await Order.deleteMany()
     await Products.deleteMany()
     await User.deleteMany()

     const createdUsers = await User.insertMany(users)

     const adminUser = createdUsers[0]._id

     const sampleProducts = await Products.map(product => {
         return{...product, user: adminUser}
     })
     await Product.insertMany(sampleProducts)
     console.log('Data Imported!'.green.inverse)
     process.exit()

    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit()
    }
}

const destroyData = async () =>{
    try{
     await Order.deleteMany()
     await Products.deleteMany()
     await User.deleteMany()
     
     console.log('Data Destroyed!'.red.inverse)
     process.exit()
     
    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit()
    }
}
if(process.argv[2]=== '-d'){
    destroyData()
}else{
     importData( )
}

