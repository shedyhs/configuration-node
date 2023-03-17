import { sum } from '@/index';

describe('sum', () => {
  test('', () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
