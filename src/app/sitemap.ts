import type { MetadataRoute } from "next";
import { products } from "@/content";
import { getSiteUrl } from "@/lib/siteUrl";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: `${siteUrl}/product/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
