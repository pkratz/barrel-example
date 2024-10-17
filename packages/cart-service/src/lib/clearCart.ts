import { increaseProductStock } from '@kratz/inventory-service';
import { cart, resetCart } from './cart';

export const clearCart = (): string => {
  Object.keys(cart).forEach((productId) => {
    increaseProductStock(productId, cart[productId].quantity);
  });
  resetCart();
  return 'Cart has been cleared';
};
