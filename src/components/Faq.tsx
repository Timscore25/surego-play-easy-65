
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqItems = [
    {
      question: "Как се добавят играчи?",
      answer: "Можете да добавяте играчи по няколко начина: чрез изпращане на покана по имейл или телефон, споделяне на код за присъединяване или търсене по SureGo ID. След като играч приеме поканата, той автоматично се добавя към вашия отбор."
    },
    {
      question: "Мога ли да променям състави?",
      answer: "Да, можете лесно да променяте съставите по всяко време. Просто отидете в секцията за управление на събития, изберете мача и преместете играчите между отборите. Системата също предлага автоматично балансиране на отборите според зададените умения на играчите."
    },
    {
      question: "Как се следят плащанията?",
      answer: "SureGo предлага вградена система за проследяване на плащания. Можете да маркирате кой е платил, да изпращате напомняния за неплатени такси и да преглеждате общия баланс на отбора. Играчите получават автоматични известия за дължими суми и могат да маркират плащанията си през приложението."
    },
    {
      question: "Работи ли за турнири?",
      answer: "Да, SureGo поддържа организиране на турнири с множество отбори. Можете да създадете турнирна структура, да следите резултати, да генерирате автоматично графици и да управлявате класирания. Функционалността за турнири е налична в разширения план на приложението."
    }
  ];

  return (
    <section id="faq" className="section-padding blue-dark-bg">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4 text-white">Често задавани въпроси</h2>
          <p className="text-lg text-white/80">
            Отговори на най-често задаваните въпроси за използването на SureGo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white/20 backdrop-blur-sm rounded-lg mb-4 overflow-hidden animate-fade-in [&_[data-state=open]]:text-accent [&_[data-state=open]_svg]:text-accent" 
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-white/10 text-left font-medium text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-white/90">
                  <p>{item.answer}</p>
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
