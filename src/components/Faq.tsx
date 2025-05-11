
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
    <section id="faq" className="section-padding bg-gray-50">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Често задавани въпроси</h2>
          <p className="text-lg text-gray-600">
            Отговори на най-често задаваните въпроси за използването на SureGo
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 text-left font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
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
