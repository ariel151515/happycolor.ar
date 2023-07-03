import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const usersShema = new Schema({
    name: {
        type: String,
        unique: false,
    },
    email: {
        type: String,
        unique: true,
    },
    pais: {
        type: String,
        unique: false,
    },
    password: {
        type: String,
        unique: true
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


usersShema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

usersShema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('Users', usersShema)

