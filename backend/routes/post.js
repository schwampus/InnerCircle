import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM post')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching posts', err)
    res.status(500).json({
      error: 'Failed to fetch posts',
      message: error.message
    })
  }
})

router.get('/:post_id', async (req, res, next) => {
  const result = await db.query('SELECT * FROM post WHERE post_id = $1', [req.params.post_id])
  res.send(result.rows[0])
})

router.get('/all/:circle_id', async (req, res, next) => {
  const result = await db.query('SELECT * FROM post WHERE post_author = $1', [req.params.circle_id])
  res.send(result.rows)
})

export default router;