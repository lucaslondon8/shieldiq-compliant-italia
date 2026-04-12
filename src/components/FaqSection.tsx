import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto dura l'audit?",
    a: "Il questionario richiede circa 20 minuti. La nostra AI analizza le risposte e genera il report entro 48 ore dalla compilazione.",
  },
  {
    q: "Devo avere già subito una sanzione?",
    a: "Assolutamente no. Il nostro servizio è preventivo: ti mettiamo in regola prima che arrivino ispezioni o sanzioni.",
  },
  {
    q: "Cosa include il Monitor mensile?",
    a: "Monitoraggio continuo delle normative, aggiornamento automatico della documentazione, alert su nuove scadenze e supporto prioritario via email.",
  },
  {
    q: "Siete disponibili anche fuori dalla Toscana?",
    a: "Sì, operiamo su tutto il territorio italiano. Il servizio è completamente digitale, quindi la sede della tua azienda non è un limite.",
  },
  {
    q: "Cosa succede se non mi adeguo entro agosto 2026?",
    a: "L'AI Act prevede sanzioni fino al 7% del fatturato globale annuo. Oltre alla sanzione economica, rischi il blocco operativo dei sistemi AI non conformi.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground sm:text-4xl">
          Domande frequenti
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-6 data-[state=open]:border-electric/30"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-text-secondary">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;
