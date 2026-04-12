import { Shield } from "lucide-react";

const CredenzialiSection = () => (
  <section id="credenziali" className="py-24 bg-navy-light">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">Chi c'è dietro ShieldIQ</h2>

        <div className="rounded-xl border border-border bg-card p-8 text-left sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-electric" />
            <span className="text-xl font-bold text-foreground">Lucas Rizzo</span>
          </div>
          <p className="leading-relaxed text-text-secondary">
            Consulente con background in cybersecurity (CompTIA Security+), advisor per startup AI e PMI italiane, invitato alla{" "}
            <span className="font-medium text-foreground">House of Lords</span> da Small Business Britain. ShieldIQ nasce dall'osservazione diretta che il{" "}
            <span className="font-semibold text-electric">90% delle PMI italiane</span> è esposto a sanzioni evitabili.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CredenzialiSection;
