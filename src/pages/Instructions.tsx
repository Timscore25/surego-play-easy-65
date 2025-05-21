import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Users, 
  Download, 
  Mail, 
  Check, 
  Plus, 
  UserPlus, 
  ShieldCheck,
  Award, 
  CalendarPlus, 
  DollarSign,
  ChevronDown
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const Instructions = () => {
  const { language } = useLanguage();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    section1: true,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="app-container px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-surego-700">
              SureGo – Организирайте футболните срещи без хаос!
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Открийте как да използвате пълния потенциал на SureGo с нашите подробни инструкции
            </p>
          </div>
          
          {/* Section 1 */}
          <InstructionSection 
            isOpen={openSections.section1}
            toggleOpen={() => toggleSection('section1')}
            sectionId="section1"
            title="Лесна организация на футболни срещи"
            icon={<Users className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                SureGo улеснява организирането на футболни мачове с приятели:
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <h4 className="font-bold text-lg mb-3 text-surego-600">Мениджърът на отбора:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Checkbox id="s1-1" className="mr-2 border-surego-400" />
                    <label htmlFor="s1-1">Създава събитие с дата и час.</label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="s1-2" className="mr-2 border-surego-400" />
                    <label htmlFor="s1-2">Определя играчите (основни, резерви, гости).</label>
                  </li>
                  <li className="flex items-center">
                    <Checkbox id="s1-3" className="mr-2 border-surego-400" />
                    <label htmlFor="s1-3">Автоматично изпраща покани.</label>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <h4 className="font-bold text-lg mb-3 text-surego-600">SureGo автоматично:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                    <span>Изпраща покани.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                    <span>Проследява потвърждения в реално време.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                    <span>Предоставя контрол и гъвкавост на мениджъра.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 shadow-sm border border-green-100">
                <h4 className="font-bold text-lg mb-3 text-surego-600">Допълнителни функции:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2" />
                    <span>Лесно финансово управление на отбора.</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>Пълна прозрачност за всички играчи.</span>
                  </li>
                </ul>
              </div>
            </div>
          </InstructionSection>
          
          {/* Section 2 */}
          <InstructionSection 
            isOpen={openSections.section2}
            toggleOpen={() => toggleSection('section2')}
            sectionId="section2"
            title="Създаване на профил – бързо и удобно!"
            icon={<Download className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                Регистрацията е лесна и ви дава незабавен достъп:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <StepCard 
                  title="Изтеглете приложението:"
                  icon={<Download className="w-6 h-6 text-surego-600" />}
                >
                  <div className="space-y-2 mt-4">
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="underline">[App Store]</span>
                    </a>
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                      <span className="underline">[Google Play]</span>
                    </a>
                  </div>
                </StepCard>
                
                <StepCard 
                  title="Изберете метод за регистрация:"
                  icon={<Mail className="w-6 h-6 text-surego-600" />}
                >
                  <ul className="space-y-2 mt-4">
                    <li>Google акаунт (бързо и удобно)</li>
                    <li>Apple ID (за потребители на iOS)</li>
                    <li>Имейл (необходимо потвърждение)</li>
                  </ul>
                </StepCard>
                
                <StepCard 
                  title="Активирайте профила:"
                  icon={<Check className="w-6 h-6 text-surego-600" />}
                >
                  <ul className="space-y-2 mt-4">
                    <li>Потвърдете регистрацията през получения имейл.</li>
                    <li>Влезте в приложението с вашия имейл и парола.</li>
                  </ul>
                </StepCard>
              </div>
            </div>
          </InstructionSection>
          
          {/* Section 3 */}
          <InstructionSection 
            isOpen={openSections.section3}
            toggleOpen={() => toggleSection('section3')}
            sectionId="section3"
            title="Създаване на вашия отбор"
            icon={<Users className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                Създайте отбор в няколко лесни стъпки:
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <div className="flex flex-col space-y-4">
                  <Step number={1} text="Отворете „Отбори"." />
                  <Step number={2} text="Натиснете „+" (горен десен ъгъл)." />
                  <Step number={3} text="Попълнете име, държава, град и добавете снимка." />
                  <Step number={4} text="Натиснете „Запази"." />
                </div>
              </div>
            </div>
          </InstructionSection>
          
          {/* Section 4 */}
          <InstructionSection 
            isOpen={openSections.section4}
            toggleOpen={() => toggleSection('section4')}
            sectionId="section4"
            title="Добавяне и управление на играчи"
            icon={<UserPlus className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                Поддържайте отбора си организиран и готов за игра:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg mb-4 text-surego-600 flex items-center">
                    <Plus className="w-5 h-5 mr-2" />
                    Добавяне на играчи
                  </h4>
                  <p className="mb-4">Отворете „Отбори" {'->'} Изберете вашия отбор {'->'} „Играчи" {'->'} „+".</p>
                  <h5 className="font-semibold mb-2">Добавете играчи чрез:</h5>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>SureGo ID (директно и бързо)</li>
                    <li>Телефонен номер (лесно свързване)</li>
                    <li>Контакти от телефона (автоматично и удобно)</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg mb-4 text-surego-600 flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Роли и позиции
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Роли:</h5>
                      <ul className="space-y-1 ml-5 list-disc">
                        <li>Основен</li>
                        <li>Резервен</li>
                        <li>Гост</li>
                        <li>Наблюдател</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Позиции:</h5>
                      <ul className="space-y-1 ml-5 list-disc">
                        <li>Вратар</li>
                        <li>Защитник</li>
                        <li>Полузащитник</li>
                        <li>Нападател</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 shadow-sm border border-blue-100">
                <h4 className="font-bold text-lg mb-4 text-surego-600 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Предимства
                </h4>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start bg-white p-3 rounded shadow-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Автоматично балансиране на отборите</span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded shadow-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Индивидуална статистика за играчите</span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded shadow-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Покани за нови потребители</span>
                  </li>
                  <li className="flex items-start bg-white p-3 rounded shadow-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Анализ на играта на отбора</span>
                  </li>
                </ul>
              </div>
            </div>
          </InstructionSection>
          
          {/* Section 5 */}
          <InstructionSection 
            isOpen={openSections.section5}
            toggleOpen={() => toggleSection('section5')}
            sectionId="section5"
            title="Създаване на събитие"
            icon={<CalendarPlus className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                Бързо и ефективно организирайте футболни събития:
              </p>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p>Изберете вашия отбор {'->'} „Събития" {'->'} „+".</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p>Попълнете име, описание и локация.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p>Задайте дата, час, продължителност и повторяемост.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p>Определете типа мач (един или два отбора).</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <p>Настройте времеви интервали за покани (основни, резерви, гости).</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      6
                    </div>
                    <div>
                      <p>Посочете цена за участие или изберете безплатно събитие.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                      7
                    </div>
                    <div>
                      <p>Натиснете „Създай събитие".</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm border border-blue-100">
                <h4 className="font-bold text-lg mb-4 text-surego-600">Автоматични функции:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <p>Изпращане на покани</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Check className="w-5 h-5 text-blue-700" />
                    </div>
                    <p>Проследяване на потвържденията</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-3 rounded-full mb-3">
                      <Users className="w-5 h-5 text-blue-700" />
                    </div>
                    <p>Балансиране на отборите</p>
                  </div>
                </div>
              </div>
            </div>
          </InstructionSection>
          
          {/* Section 6 */}
          <InstructionSection 
            isOpen={openSections.section6}
            toggleOpen={() => toggleSection('section6')}
            sectionId="section6"
            title="Управление на плащанията"
            icon={<DollarSign className="w-8 h-8 text-surego-600" />}
          >
            <div className="space-y-6">
              <p className="text-lg">
                Лесно и прозрачно финансово управление на вашите събития:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                  <h4 className="font-bold text-lg mb-4 text-surego-600">Процес на плащане:</h4>
                  <ol className="space-y-3">
                    <li className="flex">
                      <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p>Изберете събитие.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p>Натиснете "$" (в горния десен ъгъл).</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p>Управлявайте плащанията на играчите.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p>Потвърдете с бутона в горния десен ъгъл.</p>
                      </div>
                    </li>
                  </ol>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 shadow-sm border border-green-100">
                  <h4 className="font-bold text-lg mb-4 text-surego-600 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Ключови предимства:
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Удобно и ясно финансово управление.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Автоматични изчисления и баланси.</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>Остатъците се съхраняват автоматично за следващи събития.</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <p className="text-sm italic">
                      <span className="font-semibold">Пример:</span> Ако играч плати 20 лв. вместо 15 лв., оставащите 5 лв. се запазват в неговия баланс за следващи събития.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </InstructionSection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper components
interface InstructionSectionProps {
  isOpen: boolean;
  toggleOpen: () => void;
  sectionId: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InstructionSection = ({ isOpen, toggleOpen, sectionId, title, icon, children }: InstructionSectionProps) => {
  return (
    <div className="mb-8">
      <Collapsible open={isOpen} onOpenChange={toggleOpen}>
        <CollapsibleTrigger asChild>
          <button 
            className="w-full flex items-center justify-between bg-white px-6 py-4 rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors"
            aria-controls={sectionId}
          >
            <div className="flex items-center">
              <div className="mr-4">
                {icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-surego-700">{title}</h2>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-surego-600 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
            />
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4 bg-white rounded-lg p-6 shadow-sm border border-blue-100">
          {children}
        </CollapsibleContent>
      </Collapsible>
      <Separator className="mt-8" />
    </div>
  );
};

interface StepCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const StepCard = ({ title, icon, children }: StepCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="font-bold ml-2">{title}</h4>
      </div>
      {children}
    </div>
  );
};

interface StepProps {
  number: number;
  text: string;
}

const Step = ({ number, text }: StepProps) => {
  return (
    <div className="flex">
      <div className="bg-surego-100 rounded-full w-6 h-6 flex items-center justify-center text-surego-700 font-bold mr-3 flex-shrink-0">
        {number}
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Instructions;
