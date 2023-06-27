import { Schema, model } from "mongoose";

const categoriesShema = new Schema({
    nombre: String,
    unique: true
},
    {
        timestamps: true, // createdAt y updatedAt
        versionKey: false
    }
)

export default model('Categories', categoriesShema)
