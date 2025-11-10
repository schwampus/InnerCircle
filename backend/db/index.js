import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.PGURI,
});

// const pool = new Pool({
//   host: 'localhost',
//   port: 5432,
//   user: 'postgres',
//   password: '',
//   database: 'innercircle',
//   ssl: false
// })

export const query = (text, params) => {
  return pool.query(text, params)
}