import { Product } from "./Products";
export class SelectedCartItem {
  constructor(public product: Product, public amount: number) {}
}
