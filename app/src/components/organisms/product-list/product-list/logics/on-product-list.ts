import { reactive, readonly, DeepReadonly } from "vue";
import {
  ProductListLogicInterface,
  GetProductsResponse,
} from "../product-list.logic";
import { Product } from "@/values/product";

export default class implements ProductListLogicInterface {
  private initialProductList = [];
  private originProductList: Product[];
  private reactiveProductList: Product.AsObject[];
  public productList: DeepReadonly<Product.AsObject[]>;
  constructor() {
    this.originProductList = this.initialProductList;
    this.reactiveProductList = reactive(this.originToObjects());
    this.productList = readonly(this.reactiveProductList);
  }

  private originToObjects() {
    return this.originProductList.reduce((acc, record) => {
      acc.push(record.toObject());
      return acc;
    }, [] as Product.AsObject[]);
  }

  getProductsState(): DeepReadonly<Product.AsObject[]> {
    return this.productList;
  }

  /**
   * APIのMock
   */
  async loadProducts(): Promise<GetProductsResponse> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    this.setProductList([
      new Product({ id: "1", name: "dummy1", price: 1000 }),
      new Product({ id: "2", name: "dummy2", price: 2000 }),
      new Product({ id: "3", name: "dummy3", price: 3000 }),
    ]);
    return Promise.resolve({
      isSuccess: true,
    });
  }

  private setProductList(value: Product[]): void {
    this.originProductList = value;
    this.reactiveProductList = this.reactiveSetArray(
      this.reactiveProductList,
      this.originToObjects()
    );
  }

  private reactiveSetArray = <T>(base: Array<T>, updateObject: Array<T>) => {
    base.splice(0);
    updateObject.map((v) => base.push(v));
    return base;
  };
}
