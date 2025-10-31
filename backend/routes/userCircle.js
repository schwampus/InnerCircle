import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/:users_id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT uc.uc_id, uc.uc_circle_tier, c.circle_name, c.circle_avatar FROM userCircle uc LEFT JOIN circle c ON uc.uc_circle_id = c.circle_id WHERE uc.uc_user_id = $1', [req.params.users_id])
    res.send(result.rows)
  } catch (err) {
    console.log('Error fetching user circles', err)
    res.status(500).json({
      error: 'Failed to fetch user circles',
      message: err.message
    })
  }
})

router.post('/', async (req, res) => {

})

export default router;