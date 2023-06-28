import express from 'express';
import morgan from 'morgan';

import drawingRoutes from './routes/drawing.routes.js'
import userRoutes from './routes/user.routes.js'
import categoriesRoutes from './routes/categories.routes.js'
import subCategories from './routes/subCategories.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', drawingRoutes)
app.use('/api', userRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', subCategories)

export default app