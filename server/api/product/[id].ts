// @ts-ignore
import data from "../../../assets/products.json";

export default defineEventHandler((event) => {
  const routerParams = getRouterParams(event);

  const item = data.find((it: any) => `${it.id}` === routerParams.id);
  return { data: item };
});
