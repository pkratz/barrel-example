import { inventory } from './inventory';

export const reduceProductStock = (
  productId: string,
  quantity: number
): boolean => {
  if (inventory[productId]?.stock >= quantity) {
    inventory[productId].stock -= quantity;
    return true;
  }
  return false;
};
