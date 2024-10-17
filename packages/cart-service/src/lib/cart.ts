export type Cart = { [productId: string]: { quantity: number; name: string } };
export let cart: Cart = {};

export const resetCart = (): void => {
  cart = {};
};
