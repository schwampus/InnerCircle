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

router.get('/:category_name', async (req, res, next) => {
  try {
    const result = await db.query('SELECT cat.category_name, c.circle_id, c.circle_name, c.circle_avatar FROM category cat LEFT JOIN circle c ON c.circle_category = cat.category_id WHERE cat.category_name = $1', [req.params.category_name])
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching category circles', err)
    res.status(500).json({
      error: 'Failed to fetch category circles',
      message: err.message
    })
  }
})

export default router;