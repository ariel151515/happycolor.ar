// este archivo es para verificar si el usuario ya existe o si existe los roles etc
import { ROLES } from './../models/role.js'

export const checkRolesExisted = () => {
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