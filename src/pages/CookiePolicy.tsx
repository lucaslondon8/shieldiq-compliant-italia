import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t, i18n } = useTranslation();
  const isIt = i18n.language?.startsWith("it");

  const reopen = () => {
    localStorage.removeItem("shieldiq_cookie_consent_v1");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <Link to="/" className="text-sm text-electric hover:underline">{t("legal.back")}</Link>
        <h1 className="mt-6 mb-2 text-4xl font-bold text-foreground">{t("legal.cookie.title")}</h1>
        <p className="mb-8 text-sm text-text-secondary">{t("legal.lastUpdate")}: 20/04/2026</p>

        <div className="space-y-6 text-text-secondary">
          <p>{t("legal.cookie.intro")}</p>

          {isIt ? (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. Cosa sono i cookie</h2>
                <p>I cookie sono piccoli file di testo che i siti visitati inviano al browser dell'utente, dove vengono memorizzati per essere ritrasmessi al sito alla visita successiva.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Tipologie di cookie utilizzati</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Cookie tecnici (necessari):</strong> indispensabili al funzionamento del sito. Non richiedono consenso.</li>
                  <li><strong className="text-foreground">Cookie analitici:</strong> raccolgono informazioni aggregate sull'utilizzo del sito.</li>
                  <li><strong className="text-foreground">Cookie di marketing:</strong> utilizzati per personalizzare annunci e tracciare conversioni.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Gestione delle preferenze</h2>
                <p>Puoi modificare le tue preferenze in qualsiasi momento.</p>
                <button onClick={reopen} className="mt-3 rounded-lg border border-electric bg-electric/10 px-4 py-2 text-sm font-semibold text-electric hover:bg-electric/20">
                  Modifica preferenze cookie
                </button>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Cookie di terze parti</h2>
                <p>Il sito può utilizzare servizi di terze parti (es. Calendly, Zapier) che possono installare propri cookie. Per maggiori informazioni consulta le rispettive privacy policy.</p>
              </section>
            </>
          ) : (
            <>
              <section>
                <h2 className="text-xl font-bold text-foreground">1. What are cookies</h2>
                <p>Cookies are small text files sent by visited websites to the user's browser, where they are stored to be retransmitted to the site on the next visit.</p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">2. Types of cookies used</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Technical (necessary):</strong> essential for site functionality. No consent required.</li>
                  <li><strong className="text-foreground">Analytics:</strong> collect aggregated information about site usage.</li>
                  <li><strong className="text-foreground">Marketing:</strong> used to personalize ads and track conversions.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">3. Manage preferences</h2>
                <p>You can change your preferences at any time.</p>
                <button onClick={reopen} className="mt-3 rounded-lg border border-electric bg-electric/10 px-4 py-2 text-sm font-semibold text-electric hover:bg-electric/20">
                  Change cookie preferences
                </button>
              </section>
              <section>
                <h2 className="text-xl font-bold text-foreground">4. Third-party cookies</h2>
                <p>The site may use third-party services (e.g. Calendly, Zapier) that may install their own cookies. See their respective privacy policies for more information.</p>
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

export default CookiePolicy;
