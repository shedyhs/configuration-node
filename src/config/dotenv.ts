import dotenv from 'dotenv';

dotenv.config({
  debug: true,
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
