import Product, { Color, Size } from "./Product";
import Inventory from "./inventory";

import {
  ProductsFilter,
  ColorSpecification,
  SizeSpecification,
  AndSpecification,
} from "./filters";

//Products
const p1: Product = new Product("Apple", Color.GREEN, Size.LARGE);
const p2: Product = new Product("Pear", Color.GREEN, Size.LARGE);
const p3: Product = new Product("Grapes", Color.GREEN, Size.SMALL);
const p4: Product = new Product("Blueberries", Color.BLUE, Size.LARGE);
const p5: Product = new Product("Watermelon", Color.RED, Size.LARGE);

//Inventory

const inventory: Inventory = new Inventory();

inventory.addArray([p1, p2, p3, p4, p5]);

let filterSpecifications: Array<ColorSpecification | SizeSpecification> = [];
let filteredProducts = [...inventory.products];

document.addEventListener("DOMContentLoaded", () => {
  const filterList = document.getElementById("filter-list") as HTMLElement;

  fillFilters(filterList);
  fillInventory();
});

function fillFilters(filterList: HTMLElement) {
  const filters = [...Object.values(Color), ...Object.values(Size)];
  for (const filter of filters) {
    const listItem = document.createElement("md-filter-chip");
    listItem.setAttribute("label", filter);
    listItem.addEventListener("click", (event) => applyFilter(event));
    filterList.appendChild(listItem);
  }
}
function fillInventory() {
  const productList = document.getElementById("item-list") as HTMLElement;
  removeAllChildren(productList);
  for (const product of filteredProducts) {
    const listItem = document.createElement("md-list-item");
    listItem.innerText = `${product.name}`;
    productList.appendChild(listItem);
  }
}

async function applyFilter(event: Event) {
  const target = event.target as HTMLElement;
  const value = target.getAttribute("label") as Color | Size;
  await new Promise((resolve) => setTimeout(resolve, 100, "ok"));
  let selected = target.hasAttribute("selected");
  selected ??=  false
  let spec: ColorSpecification | SizeSpecification;

  if (value.toUpperCase() in Color) {
    spec = new ColorSpecification(value as Color);
    filterProducts(spec, selected);
  } else if (value.toUpperCase() in Size) {
    spec = new SizeSpecification(value as Size);
    filterProducts(spec, selected);
  }
}
function filterProducts(
  spec: ColorSpecification | SizeSpecification,
  selected: boolean
) {
  const exist = filterSpecifications.find(
    (item) => item.getValue === spec.getValue
  );

  if (!exist && selected) {
    filterSpecifications.push(spec);
  } else {
    !selected &&
      (filterSpecifications = filterSpecifications.filter(
        (spec) => spec.getValue !== exist?.getValue
      ));
  }

  const productsFilter: ProductsFilter = new ProductsFilter();

  const andSpec: AndSpecification = new AndSpecification(
    ...filterSpecifications
  );
  filteredProducts = productsFilter.filter(inventory, andSpec);
  fillInventory();
}
function removeAllChildren(parent: HTMLElement) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
