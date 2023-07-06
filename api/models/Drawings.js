import { Schema, model } from "mongoose";

const drawingsShema = new Schema({
    title: String,
    description: String,
    img: String,
    categoryId: String,
    subcategoriaId: String
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('drawings', drawingsShema)

