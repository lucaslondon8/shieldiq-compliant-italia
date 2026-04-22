import { useTranslation } from "react-i18next";
import { ClipboardList, Brain, FileCheck } from "lucide-react";

const ComeFunziona = () => {
  const { t } = useTranslation();
  const steps = [
    { icon: ClipboardList, step: "01", title: t("comeFunziona.step1Title"), desc: t("comeFunziona.step1Desc") },
    { icon: Brain, step: "02", title: t("comeFunziona.step2Title"), desc: t("comeFunziona.step2Desc") },
    { icon: FileCheck, step: "03", title: t("comeFunziona.step3Title"), desc: t("comeFunziona.step3Desc") },
  ];

  return (
    <section id="come-funziona" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">{t("comeFunziona.title")}</h2>
          <p className="text-text-secondary">{t("comeFunziona.subtitle")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-electric/40 hover:bg-navy-light">
              <span className="mb-4 block text-5xl font-extrabold text-electric/20">{s.step}</span>
              <s.icon className="mb-4 h-8 w-8 text-electric" />
              <h3 className="mb-2 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComeFunziona;
