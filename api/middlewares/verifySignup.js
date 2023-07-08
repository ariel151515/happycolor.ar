// este archivo es para verificar si el usuario ya existe o si existe los roles etc
import { ROLES } from './../models/role.js'
import User from './../models/users.js'
import Categories from '../models/categories.js'
import config from '../config.js'
import jwt from 'jsonwebtoken';
import Role from './../models/role.js'


// Verifica si existen los roles
export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exists`
                })
            }
        }
    }

    next()
}

// Verifica si el email del usuario existe al registrarse
export const verificarUsuarioExistente = async (req, res, next) => {

    try {
        const { email } = req.body

        const user = await User.findOne({ email })

        // El email ya existe, devolver respuesta con código 409
        if (user) res.status(409).json({ message: 'El email ya existe' })
        next()

    } catch (err) {
        // Si ocurre un error
        res.status(500).json({ message: 'Error al rpcesar la solicitud' })
    }
}

// verifica si es admin
export const isAdmin = async (req, res, next) => {
    try {

        const token = req.headers["x-access-token"]
        if (!token) res.status(403).json({ message: "No token provided" })

        // si el token existe extraemos lo que hay dentro (recibimos el objeto decoded)
        const decoded = jwt.verify(token, config.SECRET)
        const userId = decoded.id

        const user = await User.findById(userId)
        const rolUser = user.roles

        const esAdmin = await Role.find({ _id: { $in: rolUser } })

        if (esAdmin[0].name === "admin") {
            next()
        } else {
            res.status(401).json({ message: "Se necesita rol admin para continuar" })
        }

    } catch (err) {
        return res.status(401).json({ message: "error" }, err);
    }
}

// Verifica categoria existente t tambien subcategoria
export const verificaCategoriaExistente = async (req, res, next) => {
    const { name } = req.body

    const existeCategoria = await Categories.findOne({ name })

    if (!existeCategoria) {
        console.log(existeCategoria)
        next()
        return
    } else {
        res.status(400).json({ message: 'La categoria ya existe' })
    }
}


