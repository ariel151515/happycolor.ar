import User from '../models/users.js'


//  trae la info del usuario
export const getUser = async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id })
        res.status(500).json({ user })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al traer el usuario' })

    }
}

export const helloUser = async (req, res, next) => {

    try {

        const user = await User.findOne({ _id: req.params.id })
        res.status(500).json(`👋 Hola ${user.name} `)

    } catch (err) {
        res.status(401).json({ message: "Errors!" });
    }

}

// En  número
export const getUsuariosRegistrados = async (req, res, next) => {
    try {
        const usuarios = await User.find()
        let conteo = usuarios.length

        res.status(200).send({ conteo })

    } catch (err) {
        res.status(400).json('error')
    }
}


