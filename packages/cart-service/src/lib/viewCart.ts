import { cart } from './cart';

export const viewCart = (): {
  [productId: string]: { quantity: number; name: string };
} => {
  return { ...cart };
};
