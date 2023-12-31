import SubCategories from '../models/subcategories.js'

export const postSubCategories = async (req, res) => {
    try {
        const { name, parentCategory } = req.body
        const SubCetegory = new SubCategories({
            name,
            parentCategory
        })

        const savedSubCategory = SubCetegory
        await savedSubCategory.save()

        res.status(200).json(savedSubCategory)

    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'Error al registrar una subcategoria' })
    }
}



export const getSubCategories = async (req, res) => {
    try {
        const subcategories = await SubCategories.find()
        res.status(200).json(subcategories)

    } catch (err) {
        console.log
        res.status(400).json({ message: 'Error al traer las subcategoria' })
    }
}



export const getFiltraLasSubcategoriasDeUnaCategoria = async (req, res) => {
    try {

        const idCategoria = req.params.id
        const subcategorias = await SubCategories.find()
        const filtrado = subcategorias.filter((params) => params.parentCategory === idCategoria);

        res.status(200).json(filtrado)

    } catch (err) {
        res.status(400).json({ message: 'Error' })
    }
}
