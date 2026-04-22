import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const { t } = useTranslation();
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const currency = t("pricing.currency");

  const plans = [
    { name: "PMI Small", range: t("pricing.rangeSmall"), audit: t("pricing.smallAudit"), monitor: t("pricing.smallMonitor"), highlight: t("pricing.highlightSmall"), featured: false },
    { name: "PMI Mid",   range: t("pricing.rangeMid"),   audit: t("pricing.midAudit"),   monitor: t("pricing.midMonitor"),   highlight: t("pricing.highlightMid"),   featured: true },
    { name: "PMI Large", range: t("pricing.rangeLarge"), audit: t("pricing.largeAudit"), monitor: t("pricing.largeMonitor"), highlight: null as string | null, featured: false },
  ];
  const features = [t("pricing.feature1"), t("pricing.feature2"), t("pricing.feature3"), t("pricing.feature4")];

  return (
    <section id="pricing" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t("pricing.title")}</h2>
          <p className="text-text-secondary">{t("pricing.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col rounded-xl border p-8 transition-all ${plan.featured ? "border-electric bg-card glow-electric scale-[1.02]" : "border-border bg-card hover:border-electric/30"}`}>
              {plan.highlight && (
                <span className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${plan.featured ? "gradient-electric text-primary-foreground" : "bg-electric/10 text-electric"}`}>
                  {plan.highlight}
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-6 text-sm text-text-secondary">{plan.range}</p>

              <div className="mb-2">
                <span className="text-4xl font-extrabold text-foreground">{currency}{plan.audit}</span>
                <span className="ml-1 text-sm text-text-secondary">{t("pricing.perAudit")}</span>
              </div>
              <p className="mb-6 text-sm text-text-secondary">{t("pricing.perMonth", { price: plan.monitor })}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button onClick={() => scrollTo("assessment")} className={`w-full py-5 font-semibold ${plan.featured ? "gradient-electric text-primary-foreground hover:opacity-90" : "bg-secondary text-foreground hover:bg-navy-lighter"}`}>
                {t("pricing.cta")}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-text-secondary">
          {t("pricing.noTier")}{" "}
          <button onClick={() => scrollTo("assessment")} className="font-semibold text-electric hover:underline">
            {t("pricing.freeAssessment")}
          </button>
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
