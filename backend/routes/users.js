import express from 'express';
import * as db from '../db/index.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
    //get specific user
});

router.put('/:id', async (req, res) => {
  // Update user
});

router.delete('/:id', async (req, res) => {
  // Delete user
});


export default router;