import { Product } from "./Products";
export class CartProduct {
  constructor(public product: Product, public amount: number) {}
}
