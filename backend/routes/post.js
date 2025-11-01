import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM post ORDER BY post_date DESC')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching all posts', err)
    res.status(500).json({
      error: 'Failed to fetch all posts',
      message: err.message
    })
  }
})

router.get('/:post_id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM post WHERE post_id = $1', [req.params.post_id])
    res.send(result.rows[0])
  } catch (err) {
    console.error('Error fetching the post', err)
    res.status(500).json({
      error: 'Failed to fetch the post',
      message: err.message
    })
  }
})

router.get('/recent-posts/:circle_id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM post WHERE post_author = $1 ORDER BY post_date DESC LIMIT 2', [req.params.circle_id])
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching posts', err)
    res.status(500).json({
      error: 'Failed to fetch recent posts',
      message: err.message
    })
  }
})

router.get('/all/:circle_id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM post WHERE post_author = $1', [req.params.circle_id])
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching circle posts', err)
    res.status(500).json({
      error: 'Failed to fetch circle posts',
      message: err.message
    })
  }
})


export default router;