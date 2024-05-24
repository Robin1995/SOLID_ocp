class ProductManager {
    createProduct (name: string, color: Color, size: Size): Product {
        return new Product(name, color, size);
    }
}

class ProductStorage {
    private _products: Product[] = [];

    storeProduct (product: Product): void {
        this._products.push(product);
    }

    getProducts (): Product[] {
        return this._products;
    }
}

const productManager: ProductManager = new ProductManager();
const productStorage: ProductStorage = new ProductStorage();

const product: Product = productManager.createProduct("Product 1", Color.BLUE, Size.LARGE);

productStorage.storeProduct(product);
const allProducts: Product[] = productStorage.getProducts();