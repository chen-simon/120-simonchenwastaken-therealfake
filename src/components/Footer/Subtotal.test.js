import '@testing-library/jest-dom';
import getSubtotal from './Subtotal';

describe('subtotal function', () => {
    test('returns the subtotal of an array of items', () => {
        const item1 = {name: "1", price: 1, quantity: 2}
        const item2 = {name: "1", price: 1, quantity: 2}
        expect(getSubtotal([item1, item2])).toBe(4);
    });
}) ;
