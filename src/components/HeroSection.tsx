import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();
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
            {t("hero.badge")}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            {t("hero.title1")}{" "}
            <span className="text-electric">{t("hero.title2")}</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            {t("hero.subtitle1")}{" "}
            <span className="font-semibold text-foreground">{t("hero.subtitle2")}</span>
          </p>

          <p className="mx-auto mb-10 max-w-2xl text-sm font-medium text-destructive">
            {t("hero.warning")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollTo("assessment")}
              className="gradient-electric glow-electric text-primary-foreground px-8 py-6 text-base font-semibold hover:opacity-90"
            >
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a href="https://calendly.com/shieldiq-info/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border bg-transparent px-8 py-6 text-base font-semibold text-foreground hover:bg-secondary"
              >
                {t("hero.ctaSecondary")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
