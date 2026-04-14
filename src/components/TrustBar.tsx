import { Shield, CheckCircle } from "lucide-react";

const badges = [
  { title: "CompTIA Security+", subtitle: "Certified", icon: Shield },
  { title: "IAPP", subtitle: "Member", icon: CheckCircle },
  { title: "GDPR", subtitle: "Certified Training", icon: Shield },
  { title: "AI Act", subtitle: "Framework Specialist", icon: CheckCircle },
  { title: "NIS2", subtitle: "Advisory", icon: Shield },
];

const TrustBar = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
        Certificazioni &amp; Credenziali
      </h2>
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {badges.map((b) => (
          <div
            key={b.title}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-electric/40"
          >
            <b.icon className="h-7 w-7 text-electric" />
            <span className="text-sm font-semibold leading-tight text-foreground">{b.title}</span>
            <span className="text-xs text-text-secondary">{b.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
