import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM category')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching categories', err)
    res.status(500).json({
      error: 'Failed to fetch categories',
      message: error.message
    })
  }
})

export default router;