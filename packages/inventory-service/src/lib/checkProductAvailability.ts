import { inventory } from './inventory';

export const checkProductAvailability = (productId: string): boolean => {
  return inventory[productId]?.stock > 0 || false;
};
