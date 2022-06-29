export class Product {
  id: string;
  name: string;
  price: number;
  image: string;

  toObject(): Readonly<this> {
    return Object.assign({}, this);
  }

  constructor(data?: Partial<Product>) {
    const input = data || {};
    this.id = input.id || "";
    this.name = input.name || "";
    this.price = input.price || -1;
    this.image = input.image || "assets/logo.png";
  }
}

declare global {
  namespace Product {
    export type AsObject = {
      id: string;
      name: string;
      price: number;
      image: string;
    };
  }
}
