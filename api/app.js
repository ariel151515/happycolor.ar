import express from 'express';
import morgan from 'morgan';

import drawingRoutes from './routes/drawing.routes.js'
import authRoutes from './routes/auth.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import subCategories from './routes/subCategories.routes.js'
import favoritos from './routes/favoritos.routes.js'
import filtraLosFavoritosDeUnUsuario from './routes/favoritos.routes.js';
import { createRoles } from './libs/initialSetap.js'

const app = express()
createRoles()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', drawingRoutes)
app.use('/api', authRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', subCategories)
app.use('/api', favoritos)
app.use('/api/:id', filtraLosFavoritosDeUnUsuario)


export default app