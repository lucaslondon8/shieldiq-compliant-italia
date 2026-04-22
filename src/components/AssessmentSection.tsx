import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

// Option keys (stable, language-independent) used for scoring
type OptKey =
  | "1-10" | "11-50" | "51-250" | "250+"
  | "under2M" | "2-5M" | "5-15M" | "15-50M"
  | "yes" | "no" | "dontKnow"
  | "european" | "extraEU" | "mixed";

type Question = { qKey: string; options: OptKey[] };

const questions: Question[] = [
  { qKey: "q1", options: ["1-10", "11-50", "51-250", "250+"] },
  { qKey: "q2", options: ["under2M", "2-5M", "5-15M", "15-50M"] },
  { qKey: "q3", options: ["yes", "no", "dontKnow"] },
  { qKey: "q4", options: ["yes", "no", "dontKnow"] },
  { qKey: "q5", options: ["yes", "no", "dontKnow"] },
  { qKey: "q6", options: ["yes", "no", "dontKnow"] },
  { qKey: "q7", options: ["european", "extraEU", "mixed", "dontKnow"] },
  { qKey: "q8", options: ["yes", "no"] },
];

const riskWeights: Record<number, Partial<Record<OptKey, number>>> = {
  0: { "1-10": 5, "11-50": 15, "51-250": 25, "250+": 35 },
  1: { "under2M": 5, "2-5M": 10, "5-15M": 20, "15-50M": 30 },
  2: { "yes": 10, "no": 0, "dontKnow": 5 },
  3: { "yes": 15, "no": 0, "dontKnow": 8 },
  4: { "yes": 0, "no": 20, "dontKnow": 12 },
  5: { "yes": 0, "no": 20, "dontKnow": 12 },
  6: { "european": 0, "extraEU": 20, "mixed": 10, "dontKnow": 12 },
  7: { "yes": 25, "no": 0 },
};

const sanctionRanges: Partial<Record<OptKey, string>> = {
  "under2M": "€10.000 – €200.000",
  "2-5M": "€40.000 – €500.000",
  "5-15M": "€100.000 – €1.500.000",
  "15-50M": "€300.000 – €5.000.000",
};

// Labels shown for fixed-value options that aren't tied to t("assessment.options.*")
const fixedLabels: Partial<Record<OptKey, string>> = {
  "1-10": "1-10",
  "11-50": "11-50",
  "51-250": "51-250",
  "250+": "250+",
  "2-5M": "€2M–€5M",
  "5-15M": "€5M–€15M",
  "15-50M": "€15M–€50M",
};

const AssessmentSection = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, OptKey>>({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({ nome: "", email: "", azienda: "" });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length;
  const progress = showResults ? 100 : Math.round((step / totalSteps) * 100);

  const optionLabel = (key: OptKey) =>
    fixedLabels[key] ?? t(`assessment.options.${key}`);

  const getRiskLevel = (score: number) => {
    if (score <= 25) return { label: t("assessment.riskLow"), color: "text-green-500", bg: "bg-green-500", icon: CheckCircle2 };
    if (score <= 50) return { label: t("assessment.riskMid"), color: "text-yellow-500", bg: "bg-yellow-500", icon: AlertTriangle };
    if (score <= 75) return { label: t("assessment.riskHigh"), color: "text-orange-500", bg: "bg-orange-500", icon: AlertTriangle };
    return { label: t("assessment.riskCritical"), color: "text-destructive", bg: "bg-destructive", icon: XCircle };
  };

  const selectAnswer = (option: OptKey) => setAnswers((prev) => ({ ...prev, [step]: option }));

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
    Object.entries(answers).reduce((sum, [qi, ans]) => sum + (riskWeights[Number(qi)]?.[ans as OptKey] ?? 0), 0)
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
              <span>{showResults ? t("assessment.result") : t("assessment.step", { current: step + 1, total: totalSteps })}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-muted [&>div]:bg-electric" />
          </div>

          {/* Question Steps */}
          {!showResults && !showLeadForm && !submitted && (
            <div className="animate-fade-in">
              <h2 className="mb-8 text-xl font-bold text-foreground sm:text-2xl">
                {t(`assessment.questions.${questions[step].qKey}`)}
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
                    {optionLabel(opt)}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={prev}
                  disabled={step === 0}
                  className="flex items-center gap-1 text-sm text-text-secondary hover:text-foreground disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" /> {t("assessment.back")}
                </button>
                <Button
                  onClick={next}
                  disabled={answers[step] === undefined}
                  className="gradient-electric glow-electric text-primary-foreground px-8 py-5 font-semibold hover:opacity-90"
                >
                  {step === totalSteps - 1 ? t("assessment.seeResult") : t("assessment.next")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && !showLeadForm && !submitted && (
            <div className="animate-fade-in text-center">
              <RiskIcon className={`mx-auto mb-4 h-16 w-16 ${riskLevel.color}`} />
              <h2 className="mb-2 text-3xl font-bold text-foreground">{t("assessment.yourScore")}</h2>
              <div className="my-6 flex items-center justify-center gap-4">
                <span className="text-6xl font-black text-foreground">{riskScore}</span>
                <span className="text-2xl text-text-secondary">/100</span>
              </div>
              <span className={`inline-block rounded-full px-5 py-2 text-sm font-bold text-background ${riskLevel.bg}`}>
                {riskLevel.label}
              </span>
              <div className="mt-8 rounded-lg border border-border bg-background p-5">
                <p className="text-sm text-text-secondary">{t("assessment.exposureLabel")}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {sanctionRanges[answers[1]] ?? "N/D"}
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  onClick={() => setShowLeadForm(true)}
                  className="gradient-electric glow-electric text-primary-foreground py-6 text-base font-semibold hover:opacity-90"
                >
                  {t("assessment.getReport")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <button onClick={prev} className="text-sm text-text-secondary hover:text-foreground">
                  <ArrowLeft className="mr-1 inline h-4 w-4" /> {t("assessment.reviewAnswers")}
                </button>
              </div>
            </div>
          )}

          {/* Lead Capture */}
          {showLeadForm && !submitted && (
            <div className="animate-fade-in">
              <ShieldCheck className="mx-auto mb-4 h-12 w-12 text-electric" />
              <h2 className="mb-2 text-center text-2xl font-bold text-foreground">
                {t("assessment.leadTitle")}
              </h2>
              <p className="mb-8 text-center text-sm text-text-secondary">
                {t("assessment.leadSubtitle")}
              </p>
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <Input
                  required placeholder={t("assessment.name")} value={leadData.nome}
                  onChange={(e) => setLeadData((d) => ({ ...d, nome: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  required type="email" placeholder={t("assessment.email")} value={leadData.email}
                  onChange={(e) => setLeadData((d) => ({ ...d, email: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Input
                  required placeholder={t("assessment.company")} value={leadData.azienda}
                  onChange={(e) => setLeadData((d) => ({ ...d, azienda: e.target.value }))}
                  className="border-border bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  className="gradient-electric glow-electric w-full text-primary-foreground py-6 text-base font-semibold hover:opacity-90"
                >
                  {t("assessment.getReport")}
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
                  {t("assessment.orBookCall")}
                </a>
              </div>
            </div>
          )}

          {/* Thank You */}
          {submitted && (
            <div className="animate-fade-in text-center">
              <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-green-500" />
              <h2 className="mb-2 text-2xl font-bold text-foreground">{t("assessment.thankYou", { name: leadData.nome })}</h2>
              <p className="mb-6 text-text-secondary">
                {t("assessment.thankYouMsg", { email: leadData.email })}
              </p>
              <a
                href="https://calendly.com/shieldiq-info/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gradient-electric glow-electric text-primary-foreground px-8 py-5 font-semibold hover:opacity-90">
                  {t("assessment.bookFreeCall")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <button onClick={restart} className="mt-4 block w-full text-sm text-text-secondary hover:text-foreground">
                {t("assessment.restart")}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
