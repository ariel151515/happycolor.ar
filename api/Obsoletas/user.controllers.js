import User from '../models/users.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/role.js'


export const postUser = async (req, res) => {
    try {
        const { name, pais, email, password, impressions, subscription, roles } = req.body

        const user = new User({
            name,
            pais,
            email,
            password,
            impressions,
            subscription,
            roles
        })

        const savedUser = user
        await savedUser.save();


        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            user.roles = foundRoles.map(role => role._id)
        } else {
            const role = Role.findOne({ name: "user" }) // findOne devuelve un solo usuario, find devielve el arreglo entero
            user.roles = [role._id];
        }


        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
            expiresIn: 864000
        })

        res.status(200).json({ token });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al registrar un nuevo usuario' })
    }

}



export const getUser = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al traer los usuarios' })

    }
}

