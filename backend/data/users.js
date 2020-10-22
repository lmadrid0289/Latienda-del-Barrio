import bcrypt from 'bcryptjs'
const users = [
    {
        name:'luis',
        email:'luis@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'juan',
        email:'juan@gmail.com',
        password: bcrypt.hashSync('123456',10),
        
    },
    {
        name:'jhon',
        email:'jhon@gmail.com',
        password: bcrypt.hashSync('123456',10),
        
    },
]
export default users