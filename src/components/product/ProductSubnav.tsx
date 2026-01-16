import { Container } from "../layout/Container";
import type { Product } from "@/content";
import { cn } from "../lib/utils";

type ProductSubnavProps = {
  product: Product;
  className?: string;
};

export const ProductSubnav = ({ product, className }: ProductSubnavProps) => {
  const items = product.page.nav;

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "sticky top-20 z-30 border-b border-white/10 bg-[rgba(11,15,26,0.8)] backdrop-blur",
        className,
      )}
    >
      <Container>
        <nav className="flex flex-wrap items-center gap-2 py-3 text-sm text-white/70" aria-label="Product sections">
          {items.map((item) => (
            <a
              key={`${item.id}-${item.label}`}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                "hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
};

export default ProductSubnav;
