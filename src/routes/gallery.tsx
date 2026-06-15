import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

const items = [
  { src: "@/images/Tractor.jpg", label: "Tractors" },
  { src: "@/images/Hoses.jpg", label: "Hoses & Fittings" },
  { src: "@/images/generator.jpg", label: "Engines & Parts" },
];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Valley Tractor & Farm Supplies" },
      { name: "description", content: "See examples of tractors, parts, tools and farm supplies available at Valley Tractor & Farm Supplies in Sigatoka, Fiji." },
    ],
  }),
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-2xl mb-10">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Our Products
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            A look at some of the tractors, parts, tools and supplies we carry.
            Stop by the shop to see the full range.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => setLightbox(item.src)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card text-left shadow-soft transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <img
                src={item.src}
                loading="lazy"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10">
                <span className="font-display text-sm font-semibold text-white drop-shadow">
                  {item.label}
                </span>
              </div>
            </button>
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
            src={lightbox}
            alt="Full view"
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SiteLayout>
  );
}
