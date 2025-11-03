import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import categoryRoutes from './routes/category.js';
import circleRoutes from './routes/circle.js';
import postRoutes from './routes/post.js';
import userCircleRoutes from './routes/userCircle.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Inner Circle API is running!' });
});

app.use('/api', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/circles', circleRoutes)
app.use('/api/posts', postRoutes);
app.use('/api/user-circles', userCircleRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Redo på den externa servern på: ${port}`)
})