import Categories from '../models/categories.js'


export const postCategories = async (req, res) => {
    console.log(req.body)
    try {
        const { name } = req.body
        const category = new Categories({
            name
        })

        const saveCategory = category
        await saveCategory.save()

        res.status(201).json({ message: '¡Categoria creada con exito!' });

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

