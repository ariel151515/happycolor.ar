import express from 'express';
import morgan from 'morgan';


import drawingRoutes from './routes/drawing.routes.js'
import userRoutes from './routes/user.routes.js'


const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', drawingRoutes);
app.use('/api', userRoutes);

export default app