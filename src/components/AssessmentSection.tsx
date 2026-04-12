import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const AssessmentSection = () => (
  <section id="assessment" className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl rounded-2xl border border-electric/30 bg-card p-10 text-center sm:p-16">
        <ShieldCheck className="mx-auto mb-6 h-16 w-16 text-electric" />
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Scopri il tuo livello di rischio in 5 minuti
        </h2>
        <p className="mb-8 text-text-secondary">
          Rispondi a poche domande e ricevi un report preliminare con il tuo Risk Score e una stima dell'esposizione economica.
        </p>

        {/* 
          ==========================================
          TYPEFORM EMBED: Replace this Button with 
          your Typeform embed code, e.g.:
          <div data-tf-live="YOUR_FORM_ID"></div>
          <script src="//embed.typeform.com/next/embed.js"></script>
          ==========================================
        */}
        <Button
          size="lg"
          className="gradient-electric glow-electric text-primary-foreground px-10 py-6 text-base font-semibold hover:opacity-90"
        >
          Inizia Assessment
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default AssessmentSection;
