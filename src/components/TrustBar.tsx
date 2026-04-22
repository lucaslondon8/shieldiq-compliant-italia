import { useTranslation } from "react-i18next";
import comptiaLogo from "@/assets/comptia-security-plus.png";
import aiforgeLogo from "@/assets/aiforge-logo.jpeg";
import iappLogo from "@/assets/iapp-logo.png";
import gdprLogo from "@/assets/gdpr-logo.webp";
import aiActLogo from "@/assets/ai-act-logo.jpeg";
import nis2Logo from "@/assets/nis2-logo.jpg";

const TrustBar = () => {
  const { t } = useTranslation();
  const badges = [
    { title: "CompTIA Security+", subtitle: t("trustBar.comptiaSubtitle"), image: comptiaLogo },
    { title: "AI Forge Incubator", subtitle: t("trustBar.aiforgeSubtitle"), image: aiforgeLogo },
    { title: "IAPP", subtitle: t("trustBar.iappSubtitle"), image: iappLogo },
    { title: "GDPR", subtitle: t("trustBar.gdprSubtitle"), image: gdprLogo },
    { title: "AI Act", subtitle: t("trustBar.aiActSubtitle"), image: aiActLogo },
    { title: "NIS2", subtitle: t("trustBar.nis2Subtitle"), image: nis2Logo },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          {t("trustBar.title")}
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {badges.map((b) => (
            <div key={b.title} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-electric/40">
              <img src={b.image} alt={b.title} className="h-12 w-12 rounded-md object-contain ring-1 ring-border p-0.5 bg-muted" />
              <span className="text-sm font-semibold leading-tight text-foreground">{b.title}</span>
              <span className="text-xs text-text-secondary">{b.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
