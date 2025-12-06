import { mult } from './mult';

describe('mult', () => {
    test('positive', () => {
        expect(mult(5, 5)).toBe(25);
    });
    test('negative', () => {
        expect(mult(-5, -5)).toBe(25);
    });
});
