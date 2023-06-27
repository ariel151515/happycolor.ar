import Categories from '../models/Categories.js'

export const getDrawings = async (req, res) => {
    res.json({ funcion: 'trae los dibujos' });
}

export const postDrawings = async (req, res) => {
    const { nombre, descripcion, img, categoriaId } = req.body

    res.json({ funcion: 'crea dibujos' });
}