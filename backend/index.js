import express from 'express';
import dotenv from 'dotenv';
import { Client } from 'pg'
import categoryRoutes from './routes/category';
import circleRoutes from './routes/circle';
import postRoutes from './routes/post';
import userCircleRoutes from './routes/userCircle';
import userRoutes from './routes/users';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/circles', circleRoutes)
app.use('/posts', postRoutes);
app.use('/user-circles', userCircleRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send({ hello: 'world' });

})

app.listen(port, () => {
  console.log(`Redo på den externa servern på: ${port}`)
})