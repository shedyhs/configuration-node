import '@/config/dotenv';
import '@/config/module-alias';

export function sum(a: number, b: number): number {
  return a + b;
}

// eslint-disable-next-line no-console
console.log(process.pid);
