import Drawings from '../models/drawings.js'


export const postDrawings = async (req, res) => {
    try {
        const { title, description, img, categoryId, subcategoriaId } = req.body

        console.log(description)

        const drawing = new Drawings({
            title,
            description,
            img,
            categoryId,
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
        res.status(400).send('Error al mostrar entradas')
    }
}
