import { Schema, model } from "mongoose"

export const ROLES = ["user", "admin"];

const rolesShema = new Schema({
    name: String
}, {
    versionKey: false
},
    {
        timestamps: false,
        versionKey: false
    })

export default model('Role', rolesShema)