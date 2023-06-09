import { addAlias } from 'module-alias';
import { resolve } from 'path';

const aliases = {
  dev: resolve(__dirname, '../../../src'),
  prod: resolve(__dirname, '../../'),
};

addAlias(
  '@',
  process.env.NODE_ENV === 'production' ? aliases.prod : aliases.dev,
);
