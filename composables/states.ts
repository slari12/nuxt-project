export const useCounter = () => useState<number>("counter", () => 0);
export const useShow = () => useState<boolean>("isHidden", () => false);

export const useProduct = (id?: number) => {
  if (id) {
    console.log("id", id);

    return useFetch(() => `/api/product/${id}`, {
      key: `/api/product/${id}`,
      transform: (response) => {
        console.log(response.data);
        return response.data;
      },
    });
  }
  return useFetch(() => "/api/products", {
    transform: (response) => response.data,
  });
};
