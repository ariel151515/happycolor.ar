import { Schema, model } from "mongoose";

const usersShema = new Schema({
    name: {
        type: String,
        unique: false,
    },
    email: {
        type: String,
        unique: false,
    },
    pais: {
        type: String,
        unique: false,
    },
    password: {
        type: String,
        unique: false
        //bcrypt: true
    },
    impressions: {
        type: String,
        unique: false,
    },
    subscription: { // Standar standard - premium
        type: String,
        unique: false,
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
}
)

export default model('Users', usersShema)

