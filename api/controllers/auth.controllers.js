import User from '../models/Users.js'
import jwt from 'jsonwebtoken';
import config from '../config.js';


export const signUp = async (req, res) => {
    try {
        const { name, pais, email, password, impressions, subscription, role } = req.body

        const user = new User({
            name,
            pais,
            email,
            password,
            impressions,
            subscription,
            role
        })

        user.password = await User.encryptPassword(password)

        const savedUser = user
        //console.log(savedUser)
        await savedUser.save();

        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
            expiresIn: 84600 // esto esta en segundo y vendria a ser 24h
        }) // jwt.sign({ id: savedUser._id }, '', {})

        res.status(200).json({ token });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al registrar un nuevo usuario' })
    }
}



export const signin = async (req, res) => { }


/*
export const getUser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al traer los usuarios' })

    }
}

*/
