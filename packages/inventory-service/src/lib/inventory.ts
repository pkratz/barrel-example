type Product = {
  name: string;
  stock: number;
};
export const inventory: { [id: string]: Product } = {
  product1: { name: 'Product 1', stock: 10 },
  product2: { name: 'Product 2', stock: 0 },
  product3: { name: 'Product 3', stock: 5 },
};
