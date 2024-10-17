import {
  checkProductAvailability,
  reduceProductStock,
} from '@kratz/inventory-service';
import { cart } from './cart';

export const addToCart = (productId: string, quantity: number): string => {
  if (!productId) {
    throw new Error('Product ID is required');
  }

  if (!checkProductAvailability(productId)) {
    throw new Error('Product is out of stock');
  }

  if (reduceProductStock(productId, quantity)) {
    if (cart[productId]) {
      cart[productId].quantity += quantity;
    } else {
      cart[productId] = { quantity, name: `Product ${productId}` };
    }
    return `Added ${quantity} of ${cart[productId].name} to cart`;
  } else {
    throw new Error('Not enough stock to fulfill your request');
  }
};
