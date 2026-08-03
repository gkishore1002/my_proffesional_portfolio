import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

const FAQSection = () => (
  <section id="faq" className="section-padding relative">
    <div className="container-wide">
      <SectionHeader
        label="FAQ"
        title="Clear answers before your first conversation."
        description="Everything you need to know about working with us."
        className="mb-12"
      />

      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-card/40 px-6 data-[state=open]:border-brand/25 data-[state=open]:bg-surface-card/60"
          >
            <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-foreground hover:no-underline lg:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
