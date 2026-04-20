import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isIt = i18n.language?.startsWith("it");

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Link to="/" className="text-sm text-electric hover:underline">{t("legal.back")}</Link>
        <h1 className="mt-6 mb-2 text-4xl font-bold text-foreground">{t("legal.privacy.title")}</h1>
        <p className="mb-8 text-sm text-text-secondary">{t("legal.lastUpdate")}: 20/04/2026</p>

        <div className="prose prose-invert space-y-6 text-text-secondary">
          <p>{t("legal.privacy.intro")}</p>

          {isIt ? (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Titolare del trattamento</h2>
                <p>ShieldIQ — Email: <a href="mailto:info@shieldiq.it" className="text-electric hover:underline">info@shieldiq.it</a></p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Dati raccolti</h2>
                <p>Raccogliamo: nome, email aziendale, nome azienda, risposte all'assessment di rischio, dati di navigazione (IP, browser, pagine visitate).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Finalità del trattamento</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Erogazione del servizio di assessment di rischio</li>
                  <li>Invio del report personalizzato</li>
                  <li>Contatto commerciale (previo consenso)</li>
                  <li>Adempimenti di legge</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Base giuridica</h2>
                <p>Consenso dell'interessato (art. 6.1.a GDPR), esecuzione di misure precontrattuali (art. 6.1.b), legittimo interesse (art. 6.1.f).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Conservazione</h2>
                <p>I dati sono conservati per il tempo strettamente necessario alle finalità per cui sono raccolti, non oltre 24 mesi dall'ultimo contatto.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">6. Diritti dell'interessato</h2>
                <p>Hai diritto di accesso, rettifica, cancellazione, limitazione, portabilità e opposizione (artt. 15-22 GDPR). Per esercitarli scrivi a <a href="mailto:info@shieldiq.it" className="text-electric hover:underline">info@shieldiq.it</a>.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">7. Trasferimento dati</h2>
                <p>I dati possono essere trasferiti a fornitori di servizi (es. Zapier, Calendly) anche extra-UE, con adeguate garanzie (Standard Contractual Clauses).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">8. Reclamo</h2>
                <p>Puoi proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">garanteprivacy.it</a>).</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Data Controller</h2>
                <p>ShieldIQ — Email: <a href="mailto:info@shieldiq.it" className="text-electric hover:underline">info@shieldiq.it</a></p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Data Collected</h2>
                <p>We collect: name, business email, company name, risk assessment answers, browsing data (IP, browser, visited pages).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Purposes</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Risk assessment service delivery</li>
                  <li>Sending the personalized report</li>
                  <li>Commercial contact (with consent)</li>
                  <li>Legal obligations</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Legal Basis</h2>
                <p>Consent (Art. 6.1.a GDPR), pre-contractual measures (Art. 6.1.b), legitimate interest (Art. 6.1.f).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">5. Retention</h2>
                <p>Data is retained only as long as necessary for the purposes collected, no longer than 24 months from last contact.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">6. Your Rights</h2>
                <p>You have the right to access, rectify, erase, restrict, port and object to processing (Arts. 15-22 GDPR). Contact <a href="mailto:info@shieldiq.it" className="text-electric hover:underline">info@shieldiq.it</a>.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">7. Data Transfer</h2>
                <p>Data may be transferred to service providers (e.g. Zapier, Calendly) including outside the EU, with appropriate safeguards (Standard Contractual Clauses).</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">8. Complaints</h2>
                <p>You may lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">garanteprivacy.it</a>).</p>
              </section>
            </>
          )}

          <p className="mt-8 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs text-yellow-200">
            ⚠️ {isIt ? "Questo testo è un modello standard. Si raccomanda revisione da parte di un legale prima della messa in produzione." : "This is a standard template. Legal review is recommended before production use."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
