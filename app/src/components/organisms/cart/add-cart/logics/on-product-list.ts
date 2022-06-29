import { AddCartLogicInterface, AddCartResponse } from "../add-cart.logic";
import { Product } from "@/values/product";

export default class implements AddCartLogicInterface {
  addCart(product: Product, quantity: number): Promise<AddCartResponse> {
    console.log(
      `[Mock] Product を ${quantity}個 カートに追加する処理`,
      product
    );
    return Promise.resolve({
      isSuccess: true,
    });
  }
}
