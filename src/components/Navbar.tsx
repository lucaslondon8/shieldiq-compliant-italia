import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const links: [string, string][] = [
    [t("nav.comeFunziona"), "come-funziona"],
    [t("nav.prezzi"), "pricing"],
    [t("nav.credenziali"), "credenziali"],
    [t("nav.faq"), "faq"],
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-electric" />
          <span className="text-xl font-bold text-foreground">ShieldIQ</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
          <a href="https://calendly.com/shieldiq-info/30min" target="_blank" rel="noopener noreferrer">
            <Button className="gradient-electric text-primary-foreground hover:opacity-90">
              {t("nav.cta")}
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {links.map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full py-3 text-left text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <div className="py-3 flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <a href="https://calendly.com/shieldiq-info/30min" target="_blank" rel="noopener noreferrer">
            <Button className="mt-2 w-full gradient-electric text-primary-foreground">
              {t("nav.cta")}
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
