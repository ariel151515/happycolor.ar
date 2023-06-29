import { Schema, model } from "mongoose";

const subCategoriesShema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    parentCategory: { // categoria a la que pertenece la sub categoria
        type: String,
        unique: false,
    },
},
    {
        timestamps: true, // createdAt y updatedAt
        versionKey: false
    }
)

export default model('SubCategories', subCategoriesShema)
