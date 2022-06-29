import { AddCartLogicInterface, AddCartResponse } from "../add-cart.logic";

export default class implements AddCartLogicInterface {
  addCart(productId: string, quantity: number): Promise<AddCartResponse> {
    console.log(
      `[Mock] Product[${productId}] を ${quantity}個 カートに追加する処理`
    );
    return Promise.resolve({
      isSuccess: true,
    });
  }
}
