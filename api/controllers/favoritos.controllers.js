import Favoritos from '../models/Favorites.js'

export const postFavoritos = async (req, res) => {
    try {
        const { id, idUsuario } = req.body

        const favorito = new Favoritos({
            id,
            idUsuario
        })

        await favorito.save()

        res.status(300).json(favorito)

    } catch (err) {
        console.log(err)
        res.status(400).send({ funcion: 'Error al agregar a favoritos' });
    }
}

export const getFavoritos = async (req, res) => {
    try {
        const favoritos = await Favoritos.find()
        res.status(200).json(favoritos)

    } catch (err) {
        res.status(400).json({ message: 'Error al traer  favoritos' })
    }
}

