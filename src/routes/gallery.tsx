import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { ProductCard } from "@/components/ProductCard";
import { products, type Product } from "@/data/products";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Valley Tractor & Farm Supplies" },
      {
        name: "description",
        content:
          "See examples of tractors, parts, tools and farm supplies available at Valley Tractor & Farm Supplies in Sigatoka, Fiji.",
      },
    ],
  }),
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<Product | null>(null);

  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-2xl mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Our Products
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            A look at some of the tractors, parts, tools and supplies we carry. Stop by the shop to
            see the full range.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={setLightbox} />
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <img
            src={lightbox.image}
            alt={lightbox.name}
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-md bg-black/70 px-4 py-2 text-center text-white">
            <p className="font-display font-semibold">{lightbox.name}</p>
            <p className="text-xs font-bold uppercase tracking-wide text-white/80">
              {lightbox.available ? "Available" : "Not available"}
            </p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
