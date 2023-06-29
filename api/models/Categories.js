import { Schema, model } from "mongoose";

const categoriesShema = new Schema({
    name: {
        type: String,
        unique: true
    },
},
    {
        timestamps: true, // createdAt y updatedAt
        versionKey: false
    }
)

export default model('Categories', categoriesShema)
