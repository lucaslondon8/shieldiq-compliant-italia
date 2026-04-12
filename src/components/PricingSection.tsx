import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "PMI Small",
    range: "€2M – €5M fatturato",
    audit: "2.900",
    monitor: "590",
    highlight: "Costa meno del 10% della sanzione media",
    featured: false,
  },
  {
    name: "PMI Mid",
    range: "€5M – €15M fatturato",
    audit: "4.900",
    monitor: "990",
    highlight: "Più scelto",
    featured: true,
  },
  {
    name: "PMI Large",
    range: "€15M – €50M fatturato",
    audit: "9.900",
    monitor: "1.900",
    highlight: null,
    featured: false,
  },
];

const features = [
  "Gap analysis completa",
  "Risk score quantificato in €",
  "Documentazione audit-ready",
  "Piano di remediation",
];

const PricingSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Prezzi trasparenti</h2>
          <p className="text-text-secondary">Nessun costo nascosto. Paghi solo per quello che ti serve.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-8 transition-all ${
                plan.featured
                  ? "border-electric bg-card glow-electric scale-[1.02]"
                  : "border-border bg-card hover:border-electric/30"
              }`}
            >
              {plan.highlight && (
                <span
                  className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.featured
                      ? "gradient-electric text-primary-foreground"
                      : "bg-electric/10 text-electric"
                  }`}
                >
                  {plan.highlight}
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mb-6 text-sm text-text-secondary">{plan.range}</p>

              <div className="mb-2">
                <span className="text-4xl font-extrabold text-foreground">€{plan.audit}</span>
                <span className="ml-1 text-sm text-text-secondary">/ audit</span>
              </div>
              <p className="mb-6 text-sm text-text-secondary">
                + €{plan.monitor}/mese per il monitoraggio continuo
              </p>

              <ul className="mb-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollTo("assessment")}
                className={`w-full py-5 font-semibold ${
                  plan.featured
                    ? "gradient-electric text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-foreground hover:bg-navy-lighter"
                }`}
              >
                Inizia Ora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
