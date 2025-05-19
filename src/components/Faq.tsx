
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const Faq = () => {
  const { t } = useLanguage();
  
  const faqItems = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer')
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer')
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer')
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer')
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50 px-4 sm:px-6">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="section-title mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">{t('faqTitle')}</h2>
          <p className="section-subtitle text-base sm:text-lg">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg mb-3 sm:mb-4 overflow-hidden animate-fade-in [&_[data-state=open]]:text-primary [&_[data-state=open]_svg]:text-warmyellow-400" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-100 text-left font-medium text-sm sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-sm">
                  <p className="text-gray-600">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
