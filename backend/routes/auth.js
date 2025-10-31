import argon2 from 'argon2';
import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

async function hashPassword(password) {
  try {
      const hash = await argon2.hash(password);
      return hash
  } catch (err) {
    console.error('Error hashing password:', err);
  }
};

async function checkPassword(hashedPassword, password) {
  try {
    const match = await argon2.verify(hashedPassword, password);
    return match;
  } catch (err) {
    console.error('Error verifying password:', err);
    return false;
  }
};

router.post('/signup', async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({ error: 'Please fill in the missing info' });
  }

  try {
    const existingUser = await db.query('SELECT users_id FROM users WHERE users_email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    const hashedPassword = await hashPassword(password);
    
    const result = await db.query(
      'INSERT INTO users (users_name, users_email, users_pass) VALUES($1, $2, $3) RETURNING users_id, users_name, users_email',
      [userName, email, hashedPassword]
    );

    res.status(201).json({ 
      message: 'User created successfully', 
      user: result.rows[0] 
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const result = await db.query('SELECT users_id, users_name, users_email, users_avatar, users_pass FROM users WHERE users_email = $1', [email]);
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email, please try again' });
    }

    const user = result.rows[0];
    
    const isPasswordValid = await checkPassword(user.users_pass, password);
    
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // user data w/o password
    const { users_pass, ...userWithoutPassword } = user;
    res.json({ 
      message: 'Login successful', 
      user: userWithoutPassword 
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed' });
  }
});

router.post('/logout', async (req, res) => {
  res.json({ message: 'Logout successful' });
});

export default router;