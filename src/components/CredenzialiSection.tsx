import { useTranslation } from "react-i18next";
import { Shield } from "lucide-react";

const CredenzialiSection = () => {
  const { t } = useTranslation();
  return (
    <section id="credenziali" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">{t("credenziali.title")}</h2>
          <div className="rounded-xl border border-border bg-card p-8 text-left sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-electric" />
              <span className="text-xl font-bold text-foreground">Lucas Rizzo</span>
            </div>
            <p className="leading-relaxed text-text-secondary">
              {t("credenziali.bio1")}
              <span className="font-medium text-foreground">{t("credenziali.houseOfLords")}</span>
              {t("credenziali.bio2")}
              <span className="font-medium text-foreground">{t("credenziali.aiForge")}</span>
              {t("credenziali.bio3")}
              <span className="font-semibold text-electric">{t("credenziali.stat")}</span>
              {t("credenziali.bio4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredenzialiSection;
