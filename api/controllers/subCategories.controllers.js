import SubCategories from '../models/SubCategories.js'

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
        const SubCategories = await SubCategories.find()
    } catch (err) {
        res.status(400).json({ message: 'Error al traer las subcategoria' })
    }
}