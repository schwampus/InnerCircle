import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users')
    res.send(result.rows)
  } catch (err) {
    console.error('Error fetching all users', err)
    res.status(500).json({
      error: 'Failed to fetch all users',
      message: err.message
    })
  }
})

router.get('/:users_id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users WHERE users_id = $1', [req.params.users_id])
    res.send(result.rows[0])
  } catch (err) {
    console.error('Error fetching the user', err)
    res.status(500).json({
      error: 'Failed to fetch the user',
      message: err.message
    })
  }
});

router.patch('/:users_id', async (req, res) => {
  const { userName, userEmail, userAvatar } = req.body;

  try {
    let query;
    let value;

    if (userEmail) {
      query = 'UPDATE users SET users_email = $1 WHERE users_id = $2';
      value = userEmail;
    } else if (userName) {
      query = 'UPDATE users SET users_name = $1 WHERE users_id = $2';
      value = userName;
    } else if (userAvatar) {
      query = 'UPDATE users SET users_avatar = $1 WHERE users_id = $2';
      value = userAvatar;
    } else {
      return res.status(400).json({ error: 'No valid field provided for update' });
    }

    await db.query(query, [value, req.params.users_id]);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error updating the user', err)
    res.status(500).json({
      error: 'Failed to update the user',
      message: err.message
    })
  }

});

router.delete('/:users_id', async (req, res) => {
  try {
    const result = await db.query('DELETE FROM users WHERE users_id = $1', [req.params.users_id])
    res.status(200).json({ message: 'User deleted!' });
  } catch (err) {
    console.error('Error deleting the user: ', err)
  }
});


export default router;