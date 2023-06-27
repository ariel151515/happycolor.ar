import { Schema, model } from "mongoose";

const drawingsShema = new Schema({
    nombre: String,
    descripcion: String,
    img: String,
    categoriaId: String
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('Drawings', drawingsShema)

