import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const isIt = i18n.language?.startsWith("it");

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Link to="/" className="text-sm text-electric hover:underline">{t("legal.back")}</Link>
        <h1 className="mt-6 mb-2 text-4xl font-bold text-foreground">{t("legal.terms.title")}</h1>
        <p className="mb-8 text-sm text-text-secondary">{t("legal.lastUpdate")}: 20/04/2026</p>

        <div className="space-y-6 text-text-secondary">
          <p>{t("legal.terms.intro")}</p>

          {isIt ? (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Oggetto</h2>
                <p>ShieldIQ offre servizi di consulenza in ambito compliance AI Act, NIS2 e GDPR per PMI italiane.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Utilizzo del sito</h2>
                <p>L'utente si impegna a utilizzare il sito nel rispetto della legge e dei diritti di terzi.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Proprietà intellettuale</h2>
                <p>Tutti i contenuti del sito (testi, grafica, logo) sono di proprietà di ShieldIQ e tutelati dalle leggi sul diritto d'autore.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Limitazione di responsabilità</h2>
                <p>Il risk score e le informazioni fornite hanno valore indicativo e non sostituiscono una consulenza professionale personalizzata.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Legge applicabile</h2>
                <p>I presenti Termini sono regolati dalla legge italiana. Foro competente: Tribunale di Milano.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Subject</h2>
                <p>ShieldIQ provides consulting services for AI Act, NIS2 and GDPR compliance for European SMBs.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Use of the site</h2>
                <p>The user agrees to use the site in compliance with the law and third-party rights.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Intellectual property</h2>
                <p>All site content (texts, graphics, logo) is owned by ShieldIQ and protected by copyright laws.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Limitation of liability</h2>
                <p>The risk score and information provided are indicative and do not replace personalized professional advice.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Governing law</h2>
                <p>These Terms are governed by Italian law. Court of jurisdiction: Court of Milan.</p>
              </section>
            </>
          )}

          <p className="mt-8 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-200">
            ⚠️ {isIt ? "Modello standard. Si raccomanda revisione legale." : "Standard template. Legal review recommended."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
