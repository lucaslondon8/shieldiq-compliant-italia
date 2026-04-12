import { ClipboardList, Brain, FileCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Questionario online",
    desc: "15 domande, 20 minuti. Analizziamo la tua infrastruttura, i tool AI utilizzati e i processi di gestione dati.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Analisi AI",
    desc: "Identifichiamo i gap normativi e quantifichiamo il rischio in euro — così sai esattamente quanto ti costa non agire.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Report + Fix Package",
    desc: "Documentazione completa con piano di remediation consegnata in 48 ore. Pronta per audit e ispezioni.",
  },
];

const ComeFunziona = () => (
  <section id="come-funziona" className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Come funziona</h2>
        <p className="text-text-secondary">Tre passaggi per la compliance completa. Senza burocrazia.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.step}
            className="group relative rounded-xl border border-border bg-card p-8 transition-all hover:border-electric/40 hover:bg-navy-light"
          >
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

export default ComeFunziona;
