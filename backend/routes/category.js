import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await db.query('SELECT * FROM category')
  res.send(result.rows)
})

export default router;