import Favoritos from '../models/favorites.js'

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



// ctrl + k / ctrl + c  -  descomentar:  ctrl + k / ctrl + u
// export const getFavoritos = async (req, res) => {
//     try {
//         const favoritos = await Favoritos.find()
//         res.status(200).json(favoritos)

//     } catch (err) {
//         res.status(400).json({ message: 'Error al traer  favoritos' })
//     }
// }


export const getFiltraLosFavoritosDeUnUsuario = async (req, res) => {
    try {
        const idUser = req.params.id
        const fav = await Favoritos.find()
        const filtrado = fav.filter((params) => params.idUsuario === idUser);

        res.status(200).json(filtrado)

    } catch (err) {
        res.status(400).json({ message: 'Error' })
    }
}

