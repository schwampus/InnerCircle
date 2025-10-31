import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM userCircle')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching user circles', err)
    res.status(500).json({
      error: 'Failed to fetch user circles',
      message: error.message
    })
  }
})

export default router;