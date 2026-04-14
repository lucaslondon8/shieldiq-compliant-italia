import comptiaBadge from "@/assets/badges/comptia-security-plus.png";
import iappBadge from "@/assets/badges/iapp-logo.png";
import gdprBadge from "@/assets/badges/gdpr-badge.png";
import aiActBadge from "@/assets/badges/ai-act-badge.png";
import nis2Badge from "@/assets/badges/nis2-badge.png";

const badges = [
  { title: "CompTIA Security+", subtitle: "Certified", image: comptiaBadge },
  { title: "IAPP", subtitle: "Member", image: iappBadge },
  { title: "GDPR", subtitle: "Certified Training", image: gdprBadge },
  { title: "AI Act", subtitle: "Framework Specialist", image: aiActBadge },
  { title: "NIS2", subtitle: "Advisory", image: nis2Badge },
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
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-electric/40"
          >
            <img
              src={b.image}
              alt={`${b.title} badge`}
              loading="lazy"
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
            <span className="text-sm font-semibold leading-tight text-foreground">{b.title}</span>
            <span className="text-xs text-text-secondary">{b.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
