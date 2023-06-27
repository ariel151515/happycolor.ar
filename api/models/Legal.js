import { Schema, model } from "mongoose";

const legalShema = new Schema({
    nombre: {
        name: String,
        texto: String
    }
}, {
    timestamps: false,
    versionKey: false
}
)

export default model('Legal', legalShema)