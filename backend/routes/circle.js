import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

// join query with posts
// router.get('/:circle_id', async (req, res, next) => {
//   try {
//     const result = await db.query('SELECT c.circle_id, c.circle_name, c.circle_avatar, c.circle_bio, p.post_id, p.post_title, p.post_text, p.post_content, p.post_tier, p.post_date FROM circle c LEFT JOIN post p ON p.post_author = c.circle_id WHERE c.circle_id = $1 ORDER BY p.post_date DESC', [req.params.circle_id])
//     res.send(result.rows)
//   } catch (err) {
//     console.error('Error fetching circle details', err)
//     res.status(500).json({
//       error: 'Failed to fetch circle details',
//       message: err.message
//     })
//   }
// })


//only circle details
router.get('/:circle_id', async (req, res, next) => {
  try {
    const result = await db.query('SELECT circle_id, circle_name, circle_avatar, circle_bio FROM circle WHERE circle_id = $1', [req.params.circle_id])
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching circle details', err)
    res.status(500).json({
      error: 'Failed to fetch circle details',
      message: err.message
    })
  }
})

//list of fans
router.get('/:circle_id/fans', async (req, res, next) => {
  try {
    const result = await db.query('SELECT uc_id, uc_circle_tier, uc_user_id FROM userCircle WHERE uc_circle_id = $1', [req.params.circle_id])
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching circle details', err)
    res.status(500).json({
      error: 'Failed to fetch circle details',
      message: err.message
    })
  }
})

export default router;