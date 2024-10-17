import { inventory } from './inventory';

export const increaseProductStock = (
  productId: string,
  quantity: number
): void => {
  if (inventory[productId]) {
    inventory[productId].stock += quantity;
  }
};
