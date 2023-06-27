import { Schema, model } from "mongoose";

const downloadsShema = new Schema({
    idDrawing: {
        dibujoId: String,
        unique: true
    },
    idUser: {
        dibujoId: String,
        unique: true
    },
}, {
    timestamps: true,
    versionKey: false
}
)

export default model('Downloads', downloadsShema)
