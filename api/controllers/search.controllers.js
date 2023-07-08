import Drawings from './../models/drawings.js'

// metodos de MongoDB 
export const searchCtrl = async (req, res) => {
    try {
        const searchQuery = { title: { $regex: req.params.drawing, $options: 'i' } };
        const result = await Drawings.find(searchQuery);

        res.status(201).json({ result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error' });
    }
};


/*
// js
export const searchCtrl = async (req, res) => {
    try {

        let drawingsAll = await Drawings.find()
        let result = []

        for (let i = 0; i < drawingsAll.length; i++)
            if (drawingsAll[i].title.toLowerCase().includes('leon'))
                result.push(drawingsAll[i])

        res.status(201).json({ result })

    } catch (err) {
        console.log(err)
        res.status(201).json({ message: 'error' });
    }
}
*/

