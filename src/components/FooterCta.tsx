import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Mail, Linkedin } from "lucide-react";

const FooterCta = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer id="footer-cta" className="border-t border-border bg-navy-light py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Prenota la tua call gratuita di 20 minuti
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-text-secondary">
          Nessun impegno — scopri la tua esposizione reale e ricevi un piano d'azione personalizzato.
        </p>

        <a href="https://calendly.com/shieldiq-info/30min" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="gradient-electric glow-electric text-primary-foreground px-10 py-6 text-base font-semibold hover:opacity-90"
          >
            Prenota Call Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-text-secondary sm:flex-row sm:gap-6">
          <a href="mailto:info@shieldiq.it" className="flex items-center gap-2 transition-colors hover:text-electric">
            <Mail className="h-4 w-4" />
            info@shieldiq.it
          </a>
          <a href="https://www.linkedin.com/company/112495085/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-electric">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 border-t border-border pt-8 text-xs text-text-secondary">
          <Shield className="h-4 w-4 text-electric" />
          <span>© {new Date().getFullYear()} ShieldIQ. Tutti i diritti riservati.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterCta;
