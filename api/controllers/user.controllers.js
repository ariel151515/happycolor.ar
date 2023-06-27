import User from '../models/Users.js'

export const postUser = async (req, res) => {
    try {
        const { nombre, pais, email, password, impressions, subscription, role } = req.body

        const user = new User({
            nombre,
            pais,
            email,
            password,
            impressions,
            subscription,
            role
        })

        const savedUser = user
        await savedUser.save();

        res.status(200).json({ savedUser });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error al registrar un nuevo usuario' })
    }

}

export const getUser = async (req, res) => {
    const users = await User.find()
    res.json(users);
}