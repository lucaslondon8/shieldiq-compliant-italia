import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

type Question = {
  question: string;
  options: string[];
};

const questions: Question[] = [
  { question: "Quanti dipendenti ha la tua azienda?", options: ["1-10", "11-50", "51-250", "250+"] },
  { question: "Qual è il fatturato annuo approssimativo?", options: ["Sotto €2M", "€2M–€5M", "€5M–€15M", "€15M–€50M"] },
  { question: "Usi CRM automatizzati? (HubSpot, Salesforce, Zoho...)", options: ["Sì", "No", "Non so"] },
  { question: "Usi ChatGPT o altri strumenti AI nel lavoro quotidiano?", options: ["Sì", "No", "Non so"] },
  { question: "Hai un registro dei trattamenti dati aggiornato?", options: ["Sì", "No", "Non so"] },
  { question: "Hai nominato un DPO o responsabile privacy?", options: ["Sì", "No", "Non so"] },
  { question: "I tuoi fornitori IT sono europei o extra-UE?", options: ["Europei", "Extra-UE", "Misti", "Non so"] },
  { question: "Hai subito data breach negli ultimi 2 anni?", options: ["Sì", "No"] },
];

const riskWeights: Record<number, Record<string, number>> = {
  0: { "1-10": 5, "11-50": 15, "51-250": 25, "250+": 35 },
  1: { "Sotto €2M": 5, "€2M–€5M": 10, "€5M–€15M": 20, "€15M–€50M": 30 },
  2: { "Sì": 10, "No": 0, "Non so": 5 },
  3: { "Sì": 15, "No": 0, "Non so": 8 },
  4: { "Sì": 0, "No": 20, "Non so": 12 },
  5: { "Sì": 0, "No": 20, "Non so": 12 },
  6: { "Europei": 0, "Extra-UE": 20, "Misti": 10, "Non so": 12 },
  7: { "Sì": 25, "No": 0 },
};

const sanctionRanges: Record<string, string> = {
  "Sotto €2M": "€10.000 – €200.000",
  "€2M–€5M": "€40.000 – €500.000",
  "€5M–€15M": "€100.000 – €1.500.000",
  "€15M–€50M": "€300.000 – €5.000.000",
};

function getRiskLevel(score: number) {
  if (score <= 25) return { label: "Verde / Basso", color: "text-green-400", bg: "bg-green-500", icon: CheckCircle2 };
  if (score <= 50) return { label: "Giallo / Medio", color: "text-yellow-400", bg: "bg-yellow-500", icon: AlertTriangle };
  if (score <= 75) return { label: "Arancione / Alto", color: "text-orange-400", bg: "bg-orange-500", icon: AlertTriangle };
  return { label: "Rosso / Critico", color: "text-red-400", bg: "bg-red-500", icon: XCircle };
}

const AssessmentSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ nome: "", email: "", azienda: "" });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length;
  const progress = showResults ? 100 : Math.round((step / totalSteps) * 100);

  const selectAnswer = (option: string) => {
    setAnswers((prev) => ({ ...prev, [step]: option }));
  };

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else setShowResults(true);
  };

  const prev = () => {
    if (showResults) { setShowResults(false); return; }
    if (step > 0) setStep(step - 1);
  };

  const riskScore = Math.min(
    100,
    Object.entries(answers).reduce((sum, [qi, ans]) => sum + (riskWeights[Number(qi)]?.[ans] ?? 0), 0)
  );
  const riskLevel = getRiskLevel(riskScore);
  const RiskIcon = riskLevel.icon;

  const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/27207492/u7p92mp/";

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome: leadData.nome,
      email: leadData.email,
      nomeAzienda: leadData.azienda,
      domanda1_dipendenti: answers[0] ?? "",
      domanda2_fatturato: answers[1] ?? "",
      domanda3_crm: answers[2] ?? "",
      domanda4_ai: answers[3] ?? "",
      domanda5_registro: answers[4] ?? "",
      domanda6_dpo: answers[5] ?? "",
      domanda7_fornitori: answers[6] ?? "",
      domanda8_breach: answers[7] ?? "",
      riskScore,
      riskLevel: riskLevel.label,
      sanctionRange: sanctionRanges[answers[1]] ?? "N/D",
    };
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }
    setSubmitted(true);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
    setShowLeadForm(false);
    setSubmitted(false);
    setLeadData({ nome: "", email: "", azienda: "" });
  };

  return (
    <section id="assessment" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-electric/30 bg-card p-8 sm:p-14">
          {/* Progress */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-xs text-text-secondary">
              <span>{showResults ? "Risultato" : `Domanda ${step + 1} di ${totalSteps}`}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-muted [&>div]:bg-electric" />
          </div>

          {/* Question Steps */}
          {!showResults && !showLeadForm && !submitted && (
            <div className="animate-fade-in">
              <h2 className="mb-8 text-xl font-bold text-foreground sm:text-2xl">
                {questions[step].question}
              </h2>
              <div className="mb-8 grid gap-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => selectAnswer(opt)}
                    className={`rounded-lg border px-5 py-4 text-left text-sm font-medium transition-all sm:text-base ${
                      answers[step] === opt
                        ? "border-electric bg-electric/10 text-foreground"
                        : "border-border bg-background text-text-secondary hover:border-electric/50 hover:bg-electric/5"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={step === 0}
                  className="flex items-center gap-1 text-sm text-text-secondary hover:text-foreground disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" /> Indietro
                </button>
                <Button
                  onClick={next}
                  disabled={answers[step] === undefined}
                  className="gradient-electric glow-electric text-primary-foreground px-8 py-5 font-semibold hover:opacity-90"
                >
                  {step === totalSteps - 1 ? "Vedi Risultato" : "Avanti"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && !showLeadForm && !submitted && (
            <div className="animate-fade-in text-center">
              <RiskIcon className={`mx-auto mb-4 h-16 w-16 ${riskLevel.color}`} />
              <h2 className="mb-2 text-3xl font-bold text-foreground">Il tuo Risk Score</h2>
              <div className="my-6 flex items-center justify-center gap-4">
                <span className="text-6xl font-black text-foreground">{riskScore}</span>
                <span className="text-2xl text-text-secondary">/100</span>
              </div>
              <span className={`inline-block rounded-full px-5 py-2 text-sm font-bold text-background ${riskLevel.bg}`}>
                {riskLevel.label}
              </span>
              <div className="mt-8 rounded-lg border border-border bg-background p-5">
                <p className="text-sm text-text-secondary">Stima esposizione sanzionatoria</p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {sanctionRanges[answers[1]] ?? "N/D"}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  onClick={() => setShowLeadForm(true)}
                  className="gradient-electric glow-electric text-primary-foreground py-6 text-base font-semibold hover:opacity-90"
                >
                  Ricevi il Report Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <button onClick={prev} className="text-sm text-text-secondary hover:text-foreground">
                  <ArrowLeft className="mr-1 inline h-4 w-4" /> Rivedi le risposte
                </button>
              </div>
            </div>
          )}

          {/* Lead Capture */}
          {showLeadForm && !submitted && (
            <div className="animate-fade-in">
              <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-electric" />
              <h2 className="mb-2 text-center text-2xl font-bold text-foreground">
                Ricevi il tuo report personalizzato
              </h2>
              <p className="mb-8 text-center text-sm text-text-secondary">
                Ti invieremo un'analisi dettagliata con raccomandazioni specifiche per la tua azienda.
              </p>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <Input
                  required placeholder="Nome" value={leadData.nome}
                  onChange={(e) => setLeadData((d) => ({ ...d, nome: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  required type="email" placeholder="Email aziendale" value={leadData.email}
                  onChange={(e) => setLeadData((d) => ({ ...d, email: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  required placeholder="Nome azienda" value={leadData.azienda}
                  onChange={(e) => setLeadData((d) => ({ ...d, azienda: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="gradient-electric glow-electric w-full text-primary-foreground py-6 text-base font-semibold hover:opacity-90"
                >
                  Ricevi il Report Completo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <div className="mt-6 text-center">
                <a
                  href="https://calendly.com/shieldiq-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-electric hover:underline"
                >
                  Oppure prenota una call gratuita →
                </a>
              </div>
            </div>
          )}

          {/* Thank You */}
          {submitted && (
            <div className="animate-fade-in text-center">
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-400" />
              <h2 className="mb-2 text-2xl font-bold text-foreground">Grazie {leadData.nome}!</h2>
              <p className="mb-6 text-text-secondary">
                Riceverai il tuo report entro 24 ore su {leadData.email}. Nel frattempo, prenota una call gratuita.
              </p>
              <a
                href="https://calendly.com/shieldiq-info/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gradient-electric glow-electric text-primary-foreground px-8 py-5 font-semibold hover:opacity-90">
                  Prenota una Call Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <button onClick={restart} className="mt-4 block w-full text-sm text-text-secondary hover:text-foreground">
                Rifai l'assessment
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
