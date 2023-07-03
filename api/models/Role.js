import { Schema, model } from "mongoose"


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