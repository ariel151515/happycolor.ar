import User from '../models/users.js'
import jwt from 'jsonwebtoken';
import config from '../config.js';
import Role from '../models/role.js'

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

        // encrypting password
        user.password = await User.encryptPassword(user.password)

        const savedUser = user

        if (role) {

            //console.log('si existe')
            const foundRoles = await Role.find({ name: { $in: role } }) // Busca si en todos los documentos de la coleccion existe el roles
            savedUser.roles = foundRoles.map(role => role._id)

        } else {

            //console.log('no existe')

            /*
            const role = Role.find()
            const result = role.filter(role => role._id === '64a31b53d2e7d5ae91edb8e3')
            console.log(result)
            */

            // por defecto le asigna el id del role
            const role = await Role.findOne({ name: "user" }) // findOne devuelve un solo usuario, find devielve el arreglo entero
            savedUser.roles = [role._id];

        }


        await savedUser.save();

        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
            expiresIn: 864000
        })

        res.status(200).json({ token });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al registrar un nuevo usuario' })
    }

}



export const signIn = async (req, res) => {
    try {
        // populate puebla, osea que devuelve todo el objeto entero y no solo el id
        const userFound = await User.findOne({ email: req.body.email }).populate("roles")
        if (!userFound) return res.status(400).json({ message: "User not found" })

        // devuelve un booleano al comparar las contraseñas
        const matchPassword = await User.comparePassword(req.body.password, userFound.password)

        if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

        //console.log(userFound)

        const token = jwt.sign({ id: userFound._id }, config.SECRET, {
            expiresIn: 864000 // Equivale a un dia
        })

        res.json({ token })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error' })
    }
}


