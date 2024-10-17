import { addToCart } from './index';

describe('addToCart', () => {
  test('should add product to cart when product is available and stock is sufficient', () => {
    const result = addToCart('product1', 2);
    expect(result).toBe('Added 2 of Product product1 to cart');
  });
});
