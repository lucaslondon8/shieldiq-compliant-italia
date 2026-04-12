import { Award, Building2, Landmark, Globe } from "lucide-react";

const items = [
  { icon: Award, label: "CompTIA Security+ Certified" },
  { icon: Building2, label: "AI Forge — Principal Advisor" },
  { icon: Globe, label: "Mercurial Consulting — Fondatore" },
  { icon: Landmark, label: "House of Lords — Small Business Britain" },
];

const CredenzialiSection = () => (
  <section id="credenziali" className="py-24 bg-navy-light">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Chi c'è dietro ShieldIQ</h2>
        <p className="mb-12 text-text-secondary">
          Competenza comprovata in cybersecurity, intelligenza artificiale e compliance normativa.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 text-left transition-colors hover:border-electric/30"
            >
              <item.icon className="h-6 w-6 flex-shrink-0 text-electric" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CredenzialiSection;
