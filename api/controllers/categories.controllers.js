import Categories from '../models/Categories.js'


export const postCategories = async (req, res) => {
    try {

        const { name } = req.body

        const category = new Categories({
            name
        })

        const saveCategory = category
        await saveCategory.save()

        res.status(200).json(saveCategory);

    } catch (err) {
        res.status(400).send('Error al crear categoria')
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Categories.find()
        res.status(200).json(categories);
    } catch (err) {
        res.status(400).send('Error al traer categoria')
    }
}

