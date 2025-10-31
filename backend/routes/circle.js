import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM circle')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching circles', err)
    res.status(500).json({
      error: 'Failed to fetch circles',
      message: error.message
    })
  }
})

export default router;