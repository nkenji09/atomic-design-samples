export class Product {
  id: string;
  name: string;
  price: number;

  constructor(data?: Partial<Product>) {
    const input = data || {};
    this.id = input.id || "";
    this.name = input.name || "";
    this.price = input.price || -1;
  }
}

declare global {
  namespace Product {
    export type AsObject = {
      id: string;
      name: string;
      price: number;
    };
  }
}
