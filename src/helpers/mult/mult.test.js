import { minus } from './mult';

describe('mult', () => {
    test('positive', () => {
        expect(minus(5, 5)).toBe(25);
    });
    test('negative', () => {
        expect(minus(-5, -5)).toBe(-25);
    });
});
