const SESS_KEY = "my-cart";

export function useCart() {
  //@ts-ignore
  const productCountMap = useCookie<Partial<Record<string, number>>>(SESS_KEY, {
    default() {
      return {};
    },
  });

  function addProduct(key: string) {
    if (productCountMap.value[key]) {
      // @ts-ignore
      productCountMap.value[key] += 1;
    } else {
      productCountMap.value[key] = 1;
    }
    console.log(productCountMap.value);
  }
  function removeProduct(key: string) {
    // @ts-ignore
    if (productCountMap.value[key] > 0) {
      //@ts-ignore
      productCountMap.value[key] -= 1;
    }
    console.log(productCountMap.value);
  }

  function removeAll(key: string, all?: boolean) {
    if (all) {
      productCountMap.value[key] = undefined;
    }
  }

  return {
    productCountMap: productCountMap.value,
    addProduct,
    removeAll,
    removeProduct,
  };
}
