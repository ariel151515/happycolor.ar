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

export const getDrawingsCategorias = async (req, res) => {
    try {

        let id = req.params

        //js
        // let result = await Drawings.find()
        // let filtro = result.filter((entrada) => entrada.categoryId === id.categoria)

        const searchQuery = { categoryId: { $regex: id.categoria } };
        const result = await Drawings.find(searchQuery);

        res.status(200).json({ result })
    } catch (err) {
        console.log(err)
        res.status(200).send('Error al mostrar entradas')
    }
}

export const getDrawingsSubCategorias = async (req, res) => {
    try {

        let id = req.params
        const searchQuery = { subcategoriaId: { $regex: id.subcategoria } };
        const result = await Drawings.find(searchQuery);

        res.status(200).json({ result })
    } catch (err) {
        console.log(err)
        res.status(200).send('Error al mostrar entradas')
    }
}


// En  número
export const getEntradasPublicadas = async (req, res, next) => {
    try {

        const entradasPublicadas = await Drawings.find()
        const result = entradasPublicadas.length

        res.status(200).json({ result })
    } catch (err) {
        console.log(err)
        res.status(200).send('Error al mostrar entradas')
    }
}

// En  número
export const getDibujosImprimidos = async (req, res, next) => { }
