import { DeepReadonly } from "vue";
import { Product } from "@/values/product";

export type GetProductsResponse = {
  isSuccess: boolean;
  error?: string;
};

export interface ProductListLogicInterface {
  loadProducts(): Promise<GetProductsResponse>;
  getProductsState(): DeepReadonly<Product.AsObject[]>;
}
