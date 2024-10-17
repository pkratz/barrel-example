import { increaseProductStock } from '@kratz/inventory-service';
import { cart } from './cart';

export const removeFromCart = (productId: string, quantity: number): string => {
  if (!cart[productId] || cart[productId].quantity < quantity) {
    throw new Error('Cannot remove more than available in cart');
  }

  cart[productId].quantity -= quantity;
  increaseProductStock(productId, quantity); // Replenish stock

  if (cart[productId].quantity === 0) {
    delete cart[productId]; // Remove product from cart if quantity reaches 0
  }

  return `Removed ${quantity} of Product ${productId} from cart`;
};
