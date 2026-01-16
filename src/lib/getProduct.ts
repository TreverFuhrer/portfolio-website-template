import { products } from "@/content";
import type { Product } from "@/content";

export const getProduct = (slug: string): Product | null => {
  return products.find((product) => product.slug === slug) ?? null;
};

export default getProduct;
