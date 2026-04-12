import { AlertTriangle, Scale, ShieldAlert } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "AI Act",
    deadline: "2 agosto 2026",
    sanzione: "fino al 7% del fatturato",
    color: "text-red-400",
  },
  {
    icon: ShieldAlert,
    title: "NIS2",
    deadline: "31 ottobre 2026",
    sanzione: "fino al 2% del fatturato",
    color: "text-amber-400",
  },
  {
    icon: Scale,
    title: "GDPR",
    deadline: "Enforcement attivo",
    sanzione: "media 2024: €51.000",
    color: "text-electric",
  },
];

const UrgencyBar = () => (
  <section className="border-y border-border bg-navy-light py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4 rounded-lg border border-border bg-background/50 p-6">
            <item.icon className={`mt-0.5 h-8 w-8 flex-shrink-0 ${item.color}`} />
            <div>
              <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-electric">{item.deadline}</p>
              <p className="mt-1 text-sm text-text-secondary">Sanzione: {item.sanzione}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UrgencyBar;
