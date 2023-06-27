import { Schema, model } from "mongoose";

const favoritesShema = new Schema({
    nombre: String,
    descripcion: String,
    img: String,
    categoriaId: String,
    usuarioId: String // usuario que subio el docuemnto
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('Favorites', favoritesShema)
