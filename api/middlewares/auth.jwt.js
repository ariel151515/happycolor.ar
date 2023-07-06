import jwt from 'jsonwebtoken'
import config from "../config.js"
import User from './../models/users.js'


export const verifyToken = async (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) return res.status(403).json({ message: "No token provided" })

    try {
        // si el token existe extraemos lo que hay dentro (recibimos el objeto decoded)
        const decoded = jwt.verify(token, config.SECRET)

        // el objeto decoded devuelve un id
        const user = await User.findById(decoded.id, { password: 0 }) // verifica si existe el id del usuario en el modelo 
        if (!user) return res.status(404).json({ message: 'no user found' })

        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized!" });
    }

}


