import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductSubnav } from "@/components/product/ProductSubnav";
import { ProductSections } from "@/components/product/ProductSections";
import { getProduct } from "@/lib/getProduct";
import { products, siteConfig } from "@/content";
import { getSiteUrl } from "@/lib/siteUrl";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const product = getProduct(slug);
  const siteName = siteConfig.brand.name;

  if (!product) {
    return {
      title: `Product | ${siteName}`,
      description: "Product details",
      openGraph: {
        title: `Product | ${siteName}`,
        description: "Product details",
        images: [{ url: "/og/default.png" }],
      },
      twitter: {
        title: `Product | ${siteName}`,
        description: "Product details",
        images: ["/og/default.png"],
      },
    };
  }

  const siteUrl = getSiteUrl();
  const ogImage = product.ogImage || "/og/default.png";
  const title = `${product.name} | ${siteName}`;
  const description = product.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/product/${product.slug}`,
      images: [{ url: ogImage }],
      siteName,
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [ogImage],
    },
  };
};

export const generateStaticParams = () => {
  return products.map((product) => ({ slug: product.slug }));
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <Banner />
      <Navbar secondaryNav={product.page.nav} />
      <ProductSubnav product={product} className="hidden sm:block" />
      <div className="overflow-x-hidden">
        <main>
          <ProductSections product={product} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
