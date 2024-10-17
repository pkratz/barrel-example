import { inventory } from './inventory';

export const getProductStock = (productId: string): number => {
  return inventory[productId]?.stock || 0;
};
