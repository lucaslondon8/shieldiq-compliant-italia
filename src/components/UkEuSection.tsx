import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Globe2, Shield, Network } from "lucide-react";

/**
 * UK-EU dual exposure offer.
 * Only visible when the EN locale is active (UK-targeted positioning).
 */
const UkEuSection = () => {
  const { t, i18n } = useTranslation();
  if (!i18n.language.toLowerCase().startsWith("en")) return null;

  const cards = [
    { icon: Globe2,  title: t("ukEu.card1Title"), desc: t("ukEu.card1Desc") },
    { icon: Shield,  title: t("ukEu.card2Title"), desc: t("ukEu.card2Desc") },
    { icon: Network, title: t("ukEu.card3Title"), desc: t("ukEu.card3Desc") },
  ];
  const features = [t("ukEu.feature1"), t("ukEu.feature2"), t("ukEu.feature3"), t("ukEu.feature4")];

  return (
    <section id="uk-eu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold text-electric">
            {t("ukEu.badge")}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t("ukEu.title")}</h2>
          <p className="mx-auto max-w-2xl text-text-secondary">{t("ukEu.subtitle")}</p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-electric/40">
              <c.icon className="mb-4 h-7 w-7 text-electric" />
              <h3 className="mb-2 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Dual offer card */}
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-electric bg-card p-8 sm:p-12 glow-electric">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-2 text-2xl">
              <span>🇬🇧</span><span className="text-electric">+</span><span>🇪🇺</span>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{t("ukEu.offerTitle")}</h3>
            <p className="mb-6 max-w-xl text-text-secondary">{t("ukEu.offerDesc")}</p>

            <div className="mb-2 text-4xl font-extrabold text-foreground sm:text-5xl">{t("ukEu.offerPrice")}</div>
            <p className="mb-8 text-sm text-text-secondary">{t("ukEu.offerSubprice")}</p>

            <ul className="mb-8 grid w-full max-w-md gap-3 text-left sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-electric" />
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://calendly.com/shieldiq-info/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-electric glow-electric text-primary-foreground px-10 py-6 text-base font-semibold hover:opacity-90">
                {t("ukEu.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UkEuSection;
