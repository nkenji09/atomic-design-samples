export type AddCartResponse = {
  isSuccess: boolean;
  error?: string;
};

export interface AddCartLogicInterface {
  addCart(productId: string, quantity: number): Promise<AddCartResponse>;
}
