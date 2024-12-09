export function useMedusa() {
  const client = useMedusaClient();

  const initCart = async () => {
    const cartId = localStorage.getItem("cart_id") || null;

    if (!cartId) {
      const { cart } = await client.store.cart.create({
        region_id: "reg_01JENJ0JM7ZMXM1Y1ZZP1QQTEK",
      });
      console.log("cart ID: ", cart);
      localStorage.setItem("cart_id", cart.id);

      // save the NEW cart to the store or the state
    } else {
      const { cart } = await client.store.cart.retrieve(cartId);
      console.log("cart ID retrieved: ", cart);
      // save the EXISTING cart to the store or the state
    }
  };

  const getProducts = async () => {
    const { products } = await client.store.product.list({
      region_id: "reg_01JENKMBTA7SW78K07JS6F5WE7",
    });
    return products;
  };

  // const getOrders = async () => {
  //   const { products } = await client.
  //   return products;
  // };

  return {
    initCart,
    getProducts,
  };
}
