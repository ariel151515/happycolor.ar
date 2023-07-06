import mongoose from "mongoose";
// Mongo


let uri = 'mongodb://ndcdigital2020:gR3nWpPiWJfJ65L1@ac-duwlkab-shard-00-00.5zzjks0.mongodb.net:27017,ac-duwlkab-shard-00-01.5zzjks0.mongodb.net:27017,ac-duwlkab-shard-00-02.5zzjks0.mongodb.net:27017/?ssl=true&replicaSet=atlas-9bzcm5-shard-0&authSource=admin&retryWrites=true&w=majority';

if (typeof uri !== 'string') {
    console.log("El parametro 'uri' ser una cadena de texto.")
} else {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Conexion exitosa a MongoDB')
        })
        .catch(err => {
            console.log('Error al conectar a MongoDB:', err)
        })
}
