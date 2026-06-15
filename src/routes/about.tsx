import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Valley Tractor & Farm Supplies" },
      { name: "description", content: "A family-run farm supplies business serving growers across the Sigatoka Valley and beyond." },
      { property: "og:title", content: "About Valley Tractor & Farm Supplies" },
      { property: "og:description", content: "A family-run farm supplies business serving growers in Fiji." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">About us</p>
        <h1 className="font-display text-5xl mb-6">Rooted in the Sigatoka Valley.</h1>
        <div className="prose-like space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Valley Tractor & Farm Supplies is a locally owned shop dedicated to one job:
            helping Fiji's farmers get more out of every acre.
          </p>
          <p>
            From sugarcane growers in the valley to backyard gardeners in Sigatoka town,
            our customers count on us for honest advice, dependable machinery, and the
            small parts that make a big difference at harvest time.
          </p>
          <p>
            Stop by the store, give us a call, or send us an email — we'd love to help.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
