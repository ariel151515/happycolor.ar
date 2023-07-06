import User from '../models/users.js'
//import jwt from 'jsonwebtoken'
//import config from '../config.js'


//  trae la info del usuario
export const getUser = async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id })
        res.status(500).json({ user })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al traer los usuarios' })

    }
}

