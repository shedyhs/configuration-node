import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';

dotenv.config({
  debug: environment !== 'production',
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});
