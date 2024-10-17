import { Cart } from './cart';
import { compare } from 'fast-json-patch';

export const compareCartChanges = (cartBefore: Cart, cartAfter: Cart) => {
  return compare(cartBefore, cartAfter);
};
