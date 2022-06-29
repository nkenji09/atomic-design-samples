import { Product } from "@/values/product";

export type AddCartResponse = {
  isSuccess: boolean;
  error?: string;
};

export interface AddCartLogicInterface {
  addCart(product: Product, quantity: number): Promise<AddCartResponse>;
}
