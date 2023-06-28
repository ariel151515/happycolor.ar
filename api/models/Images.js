import { Schema, model } from "mongoose";

const imagesShema = new Schema({
    name: String,
    descripcion: String,
    img: String,
    categoryId: String
},
    {
        timestamps: true,
        versionKey: false
    }
)

export default model('Images', imagesShema)

