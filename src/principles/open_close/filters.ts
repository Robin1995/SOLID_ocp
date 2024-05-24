import Product, { Color, Size } from "./Product";
import Inventory from "./inventory";

abstract class Specification {
  public abstract isValid(product: Product): boolean;
}

class ProductsFilter {
  public filter(inventory: Inventory, specification: Specification): Product[] {
    return inventory.products.filter((product) =>
      specification.isValid(product)
    );
  }
}

class ColorSpecification extends Specification {
  private _color: Color;

  constructor(color: Color) {
    super();
    this._color = color;
  }

  public isValid(product: Product): boolean {
    return product.color === this._color;
  }

  get getValue() {
    return this._color;
  }
}
class SizeSpecification extends Specification {
  private _size: Size;

  constructor(size: Size) {
    super();
    this._size = size;
  }

  public isValid(product: Product): boolean {
    return product.size === this._size;
  }

  get getValue() {
    return this._size;
  }
}

class AndSpecification extends Specification {
  private _specifications: Specification[] = [];
  constructor(...specifications: Specification[]) {
    super();
    this._specifications = specifications;
  }
  public isValid(product: Product): boolean {
    return this._specifications.every((specification) =>
      specification.isValid(product)
    );
  }
}

export {
  ProductsFilter,
  ColorSpecification,
  SizeSpecification,
  AndSpecification,
};
