import { luganoProducts } from "./products/lugano";
import { armchairProducts } from "./products/armchairs";
import { otherProducts } from "./products/other";

export const products = [
  ...luganoProducts,
  ...armchairProducts,
  ...otherProducts
];