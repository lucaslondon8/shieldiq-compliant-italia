import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/5 blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm font-medium text-electric">
            <span className="h-2 w-2 rounded-full bg-electric animate-pulse-glow" />
            Normativa AI Act — Deadline: 2 agosto 2026
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            La tua PMI è pronta{" "}
            <span className="text-electric">per l'AI Act?</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Dal 2 agosto 2026 ogni azienda italiana che usa strumenti AI è soggetta a sanzioni fino al 7% del fatturato.{" "}
            <span className="font-semibold text-foreground">ShieldIQ ti mette in regola in 48 ore.</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollTo("assessment")}
              className="gradient-electric glow-electric text-primary-foreground px-8 py-6 text-base font-semibold hover:opacity-90"
            >
              Scopri il tuo Risk Score
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("footer-cta")}
              className="border-border bg-transparent px-8 py-6 text-base font-semibold text-foreground hover:bg-secondary"
            >
              Prenota Call Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
