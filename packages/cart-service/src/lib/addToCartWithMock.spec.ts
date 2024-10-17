import { addToCart } from './index';
import { cart } from './cart';
import {
  checkProductAvailability,
  reduceProductStock,
} from '@kratz/inventory-service';

// Mock the inventory-service module
jest.mock('@kratz/inventory-service', () => ({
  checkProductAvailability: jest.fn(),
  reduceProductStock: jest.fn(),
}));

describe('addToCart', () => {
  beforeEach(() => {
    // Clear the cart and reset mocks before each test
    for (const key in cart) {
      delete cart[key];
    }
    jest.clearAllMocks();
  });

  const checkProductAvailabilityMock =
    checkProductAvailability as jest.MockedFunction<
      typeof checkProductAvailability
    >;
  const reduceProductStockMock = reduceProductStock as jest.MockedFunction<
    typeof reduceProductStock
  >;

  test('should add product to cart when product is available and stock is sufficient', () => {
    // Mock the inventory-service functions
    checkProductAvailabilityMock.mockReturnValue(true);
    reduceProductStockMock.mockReturnValue(true);

    const result = addToCart('product1', 2);

    expect(result).toBe('Added 2 of Product product1 to cart');
    expect(checkProductAvailability).toHaveBeenCalledWith('product1');
    expect(reduceProductStock).toHaveBeenCalledWith('product1', 2);
    expect(cart['product1']).toEqual({ quantity: 2, name: 'Product product1' });
  });

  test('should throw error if product ID is not provided', () => {
    expect(() => addToCart('', 1)).toThrow('Product ID is required');
    expect(checkProductAvailability).not.toHaveBeenCalled();
    expect(reduceProductStock).not.toHaveBeenCalled();
  });

  test('should throw error if product is out of stock', () => {
    // Mock checkProductAvailability to return false
    checkProductAvailabilityMock.mockReturnValue(false);

    expect(() => addToCart('product1', 2)).toThrow('Product is out of stock');
    expect(checkProductAvailability).toHaveBeenCalledWith('product1');
    expect(reduceProductStock).not.toHaveBeenCalled();
  });

  test('should throw error if stock is not sufficient', () => {
    // Mock checkProductAvailability to return true
    checkProductAvailabilityMock.mockReturnValue(true);
    // Mock reduceProductStock to return false
    reduceProductStockMock.mockReturnValue(false);

    expect(() => addToCart('product1', 5)).toThrow(
      'Not enough stock to fulfill your request'
    );
    expect(checkProductAvailability).toHaveBeenCalledWith('product1');
    expect(reduceProductStock).toHaveBeenCalledWith('product1', 5);
  });

  test('should update quantity if product already exists in cart', () => {
    // Set up cart with an existing product
    cart['product1'] = { quantity: 1, name: 'Product product1' };

    // Mock checkProductAvailability and reduceProductStock
    checkProductAvailabilityMock.mockReturnValue(true);
    reduceProductStockMock.mockReturnValue(true);

    const result = addToCart('product1', 3);

    expect(result).toBe('Added 3 of Product product1 to cart');
    expect(cart['product1']).toEqual({ quantity: 4, name: 'Product product1' });
  });
});
