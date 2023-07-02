import Role from '../models/Role.js'

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount() // veridica si ya existen docuemntos en la coleccion

        // Si el contador es cero crea nuevos roles
        if (count > 0) return;

        // Promise.all ejecuta todas las funciones al mismo tiempo (mas info en videos de async await en Fazt code)
        const values = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'moderador' }).save(),
        ])

        console.log(values)
    } catch (err) {
        console.log(err)
    }
}