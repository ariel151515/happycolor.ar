import { Schema, model } from "mongoose";

const downloadsShema = new Schema({
    idDrawing: {
        dibujoId: String,
        unique: false
    },
    idUser: {
        dibujoId: String,
        unique: false
    },
}, {
    timestamps: true,
    versionKey: false
}
)

export default model('Downloads', downloadsShema)
