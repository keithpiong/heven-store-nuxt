const cartDrawer = ref(false);

export function useModal() {
  const showCartDrawer = () => {
    cartDrawer.value = true;
  };

  const hideCartDrawer = () => {
    cartDrawer.value = false;
  };

  return {
    showCartDrawer,
    hideCartDrawer,
    cartDrawer,
  };
}
