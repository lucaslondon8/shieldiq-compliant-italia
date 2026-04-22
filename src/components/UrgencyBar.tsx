import { useTranslation } from "react-i18next";
import { AlertTriangle, Scale, ShieldAlert } from "lucide-react";

const UrgencyBar = () => {
  const { t } = useTranslation();
  const items = [
    { icon: AlertTriangle, title: "AI Act", deadline: t("urgency.aiAct.deadline"), sanzione: t("urgency.aiAct.fine"), color: "text-destructive" },
    { icon: ShieldAlert, title: "NIS2", deadline: t("urgency.nis2.deadline"), sanzione: t("urgency.nis2.fine"), color: "text-amber-500" },
    { icon: Scale, title: "GDPR", deadline: t("urgency.gdpr.deadline"), sanzione: t("urgency.gdpr.fine"), color: "text-electric" },
  ];

  return (
    <section className="border-y border-border bg-navy-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-background/50 p-6">
              <item.icon className={`mt-0.5 h-8 w-8 flex-shrink-0 ${item.color}`} />
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-electric">{item.deadline}</p>
                <p className="mt-1 text-sm text-text-secondary">{t("urgency.fineLabel")} {item.sanzione}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgencyBar;
