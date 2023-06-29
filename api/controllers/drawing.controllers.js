import Drawings from '../models/Drawings.js'

export const postDrawings = async (req, res) => {
    try {
        const { name, description, img, categoriaId, subcategoriaId } = req.body

        const drawing = new Drawings({
            name,
            description,
            img,
            categoriaId,
            subcategoriaId
        })

        const savDrawing = drawing
        await savDrawing.save()

        res.status(300).json(savDrawing)

    } catch (err) {
        res.status(400).send({ funcion: 'Error al agregar un dibujo' });
    }
}


export const getDrawings = async (req, res) => {
    try {
        const drawing = await Drawings.find()
        res.status(200).json(drawing);
    } catch (err) {
        res.status(400).send('Error al traer categoria')
    }
}
