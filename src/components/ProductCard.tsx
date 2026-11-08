import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onSelect: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group overflow-hidden rounded-xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`View ${product.name}, ${product.available ? "available" : "not available"}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={600}
          className={`aspect-[4/3] w-full object-cover transition duration-500 ${
            product.available ? "group-hover:scale-105" : "grayscale"
          }`}
        />
        {!product.available && (
          <div className="absolute inset-0 bg-slate-900/55" aria-hidden="true" />
        )}
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <span className="font-display text-base font-semibold">{product.name}</span>
        <span
          className={`shrink-0 text-xs font-bold uppercase tracking-wide ${
            product.available ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {product.available ? "Available" : "Not available"}
        </span>
      </div>
    </button>
  );
}
