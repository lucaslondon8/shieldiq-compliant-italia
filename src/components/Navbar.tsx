import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-electric" />
          <span className="text-xl font-bold text-foreground">ShieldIQ</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Come Funziona", "come-funziona"],
            ["Prezzi", "pricing"],
            ["Credenziali", "credenziali"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <Button onClick={() => scrollTo("assessment")} className="gradient-electric text-primary-foreground hover:opacity-90">
            Prenota Call Gratuita
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {[
            ["Come Funziona", "come-funziona"],
            ["Prezzi", "pricing"],
            ["Credenziali", "credenziali"],
            ["FAQ", "faq"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full py-3 text-left text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <Button onClick={() => scrollTo("assessment")} className="mt-2 w-full gradient-electric text-primary-foreground">
            Prenota Call Gratuita
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
