import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Sprout, Truck } from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valley Tractor & Farm Supplies — Sigatoka, Fiji" },
      { name: "description", content: "Your local source for tractors, parts, and farm supplies in the Sigatoka Valley." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative">
        <div className="relative max-w-6xl mx-auto px-6 py-32 sm:py-44 text-primary-foreground">
          <p className="uppercase tracking-[0.3em] text-xs mb-4 text-accent">Sigatoka · Fiji Islands</p>
          <h1 className="font-display text-5xl sm:text-7xl max-w-3xl leading-[1.05]">
            Built for the valley.<br />Trusted by farmers.
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-primary-foreground/85">
            Valley Tractor & Farm Supplies keeps Fiji's farms moving — from tractors and tools to seeds and spare parts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Get in touch <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/about">Who we are</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Tractors & Machinery", text: "New and reliable used tractors fit for valley terrain." },
            { icon: Wrench, title: "Parts & Repairs", text: "Genuine spares and on-site servicing to keep you running." },
            { icon: Sprout, title: "Farm Supplies", text: "Seeds, fertiliser, hand tools and everyday essentials." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="size-10 rounded-md bg-primary/10 text-primary grid place-items-center mb-4">
                <f.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl">Need something specific?</h2>
            <p className="text-muted-foreground mt-2">Call, email, or drop by the store on Qereqere Valley Road.</p>
          </div>
          <Button asChild size="lg"><Link to="/contact">Contact us</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}
