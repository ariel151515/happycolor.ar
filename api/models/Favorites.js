import { Schema, model } from "mongoose";

const favoritesShema = new Schema({
    id: String,
    idUsuario: String
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('favorites', favoritesShema)
