import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Valley Tractor & Farm Supplies" },
      { name: "description", content: "Visit, call, or email Valley Tractor & Farm Supplies in Sigatoka, Fiji." },
      { property: "og:title", content: "Contact Valley Tractor & Farm Supplies" },
      { property: "og:description", content: "Get in touch with our team in Sigatoka, Fiji." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Write a message").max(1000),
});

const details = [
  { icon: MapPin, label: "Visit", value: "Qereqere Valley Road,\nSigatoka, Fiji Islands" },
  { icon: Phone, label: "Call", value: "+697 249 8416", href: "tel:+6972498416" },
  { icon: Mail, label: "Email", value: "valleytractorfarmsupplies@gmail.com", href: "mailto:valleytractorfarmsupplies@gmail.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 8:00–17:00\nSat 8:00–13:00" },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Website enquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name} (${parsed.data.email})`);
    window.location.href = `mailto:valleytractorfarmsupplies@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <SiteLayout>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.3em] text-xs text-primary mb-4">Contact</p>
          <h1 className="font-display text-5xl mb-4">Let's talk.</h1>
          <p className="text-lg text-muted-foreground">
            Need a quote, a part, or just some advice? Reach out — we usually reply within a day.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {details.map((d) => (
              <div key={d.label} className="flex gap-4">
                <div className="size-10 shrink-0 rounded-md bg-primary/10 text-primary grid place-items-center">
                  <d.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="text-foreground hover:text-primary whitespace-pre-line">{d.value}</a>
                  ) : (
                    <p className="text-foreground whitespace-pre-line">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5" style={{ boxShadow: "var(--shadow-soft)" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required maxLength={100} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required maxLength={1000} rows={6} placeholder="How can we help?" />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
              {submitting ? "Opening email…" : "Send message"}
            </Button>
            <p className="text-xs text-muted-foreground">This opens your email app pre-filled with your message.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
