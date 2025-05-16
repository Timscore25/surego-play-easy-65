
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon, MinusIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const Faq = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "Как SureGo използва изкуствен интелект?",
      answer: "SureGo използва съвременни AI алгоритми, които автоматизират организацията на събития, предлагат оптимални времена за мачове, балансират отбори според умения и игрови стил, и дори предвиждат потенциални проблеми с присъствието на играчите."
    },
    {
      question: "Как се добавят играчи в системата?",
      answer: "Можете да добавяте играчи по няколко начина: чрез изпращане на покана по имейл или телефон, споделяне на QR код за присъединяване или търсене по SureGo ID. След като играч приеме поканата, той автоматично се добавя към вашия отбор и получава известия за събития."
    },
    {
      question: "Как работи системата за плащания?",
      answer: "SureGo предлага вградена система за проследяване и обработка на плащания. Играчите могат да плащат директно чрез приложението с карта, Apple Pay, Google Pay или банков превод. Системата автоматично изчислява дължимите суми, изпраща напомняния и поддържа прозрачен баланс на отбора."
    },
    {
      question: "Може ли SureGo да организира турнири?",
      answer: "Да, SureGo поддържа пълна организация на турнири с множество отбори. Можете да създадете турнирна структура, да следите резултати, да генерирате автоматично графици и да управлявате класирания. Функционалността за турнири е налична във всички планове без допълнително заплащане."
    },
    {
      question: "Какви данни и статистики събира приложението?",
      answer: "SureGo събира подробни статистики за присъствие, резултати, голмайстори, асистенции, и дори данни за физическото представяне чрез интеграция с фитнес апи. Всички данни са представени в интуитивни визуализации и таблици, които могат да се експортират и споделят."
    },
    {
      question: "Колко струва използването на SureGo?",
      answer: "SureGo предлага безплатен план с основни функции и два премиум плана - Отборен (19,99 лв/месец) и Професионален (49,99 лв/месец) с разширени възможности. За големи организации и спортни комплекси предлагаме и корпоративни решения с персонализирани цени."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-neutral-50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(100,100,255,0.1),rgba(0,0,0,0))]"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -left-48 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>
      
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            Отговори на въпроси
          </div>
          <h2 className="section-title mb-4">Често задавани въпроси</h2>
          <p className="section-subtitle mx-auto">
            Намерете отговори на най-често задаваните въпроси за използването на SureGo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className={`border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                    hoveredIndex === index ? "shadow-lg border-primary/20" : ""
                  }`}
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-neutral-100/80 text-left font-medium text-lg [&[data-state=open]]:text-primary [&[data-state=open]_svg]:text-primary data-[state=open]:bg-neutral-50">
                    <div className="flex-1">{item.question}</div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-neutral-200 transition-all">
                      {({ open }: { open: boolean }) => (
                        open ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 bg-white text-neutral-600">
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-full"></div>
                      <div className="pl-4">{item.answer}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-neutral-600 mb-4">Не намирате това, което търсите?</div>
            <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
              <span>Вижте пълната документация</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
