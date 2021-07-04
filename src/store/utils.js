export const getProductById = (productId, products) =>
  products.find((product) => product.id === productId);
