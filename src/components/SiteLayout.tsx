import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Tractor } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="size-9 rounded-full bg-primary text-primary-foreground grid place-items-center">
              <Tractor className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold leading-none">
              Valley Tractor
              <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                & Farm Supplies
              </span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                className="px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-3 text-sm">
          <div>
            <h3 className="font-display text-base mb-2">Valley Tractor & Farm Supplies</h3>
            <p className="text-muted-foreground">Serving Fiji's farmers since day one.</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Visit</h4>
            <p className="text-muted-foreground">Qereqere Valley Road<br />Sigatoka, Fiji Islands</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Contact</h4>
            <p className="text-muted-foreground">
              +697 249 8416<br />
              valleytractorfarmsupplies@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Valley Tractor & Farm Supplies
        </div>
      </footer>
    </div>
  );
}
