import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

app.get('/:post_id', async (req, res, next) => {
  const result = await db.query('SELECT * FROM post WHERE post_id = $1', [req.params.post_id])
  res.send(result.rows[0])
})

app.get('/all/:circle_id', async (req, res, next) => {
  const result = await db.query('SELECT * FROM post WHERE post_author = $1', [req.params.circle_id])
  res.send(result.rows)
})

export default router;