import Product from './Product'
export default class Inventory {
  private _products: Product[] = [];

  public add(product: Product): void {
    this._products.push(product);
  }

  addArray(products: Product[]) {
    for (const product of products) {
      this.add(product);
    }
  }

  public get products(): Product[] {
    return this._products;
  }
}
