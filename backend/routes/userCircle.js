import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/:users_id', async (req, res, next) => {
  const query = `
  SELECT 
  uc.uc_id, 
  uc.uc_circle_tier, 
  c.circle_name, 
  c.circle_avatar 
  FROM userCircle uc 
  LEFT JOIN circle c 
  ON uc.uc_circle_id = c.circle_id 
  WHERE uc.uc_user_id = $1
  `
  try {
    const result = await db.query(query, [req.params.users_id])
    res.send(result.rows)
  } catch (err) {
    console.log('Error fetching user circles', err)
    res.status(500).json({
      error: 'Failed to fetch user circles',
      message: err.message
    })
  }
})

router.get('/feed/:users_id', async (req, res, next) => {
  const query = `
    SELECT
      p.post_id,
      p.post_title,
      p.post_text,
      p.post_content,
      p.post_date,
      p.post_tier,
      c.circle_name,
      c.circle_avatar,
      uc.uc_circle_tier
    FROM userCircle uc
    INNER JOIN circle c
      ON uc.uc_circle_id = c.circle_id
    INNER JOIN post p
      ON p.post_author = c.circle_id
    WHERE uc.uc_user_id = $1
      AND (
        CASE uc.uc_circle_tier
          WHEN 'Gold' THEN p.post_tier IN ('Gold', 'Silver', 'Bronze')
          WHEN 'Silver' THEN p.post_tier IN ('Silver', 'Bronze')
          WHEN 'Bronze' THEN p.post_tier = 'Bronze'
        END
      )
    ORDER BY p.post_date DESC;
  `;

  try {
    const result = await db.query(query, [req.params.users_id])
    res.send(result.rows)
  } catch (err) {
    console.log('Error fetching feed posts', err)
    res.status(500).json({
      error: 'Failed to fetch feed posts',
      message: err.message
    })
  }
})

router.post('/', async (req, res) => {
  const { userId, circleId, circleTier } = req.body;

  if (!circleTier) {
    return res.status(400).json({ error: 'Please select the tier.' });
  }

  if (!userId) {
    return res.status(400).json({ error: 'You should be logged in to step inside the circle' })
  }

  if (!circleId) {
    return res.status(400).json({ error: 'Select the circle to join' })
  }

  try {
    const result = await db.query(
      'INSERT INTO userCircle (uc_user_id, uc_circle_id, uc_circle_tier) VALUES($1, $2, $3) RETURNING uc_id',
      [userId, circleId, circleTier]
    );

    res.status(201).json({
      message: 'new userCircle created successfully',
      userCircle: result.rows[0]
    })
  } catch (err) {
    console.error('Error creating userCircle: ', err);
    res.status(500).json({ error: 'Failed to create a userCircle' });
  }
})

router.delete('/:uc_id', async (req, res) => {
  try {
    const result = await db.query('DELETE FROM userCircle WHERE uc_id = $1', [req.params.uc_id])
    res.status(200).json({ message: 'UserCircle deleted!' });
  } catch (err) {
    console.error('Error deleting the userCircle: ', err)
  }
})

export default router;