
import { Calendar, Users, Bell, Scale, Wallet, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [{
    id: 1,
    icon: <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Създаване на мачове и тренировки",
    description: "Бързо планиране и управление на футболни събития с всички необходими детайли."
  }, {
    id: 2,
    icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Управление на играчи с роли и позиции",
    description: "Организирайте играчите по позиции, умения и специални роли в отбора."
  }, {
    id: 3,
    icon: <Bell className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Автоматични покани и известия",
    description: "Автоматично изпращане на покани и напомняния към играчите за предстоящи мачове."
  }, {
    id: 4,
    icon: <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Балансиране на отбори",
    description: "Интелигентно разпределение на играчи за балансирани и конкурентни отбори."
  }, {
    id: 5,
    icon: <Wallet className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Проследяване на каса и плащания",
    description: "Лесно проследяване на внесените суми и общия баланс на отбора."
  }, {
    id: 6,
    icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-[#ffc100]" />,
    title: "Игрова статистика и история",
    description: "Преглед на статистики за мачове, посещаемост и представяне на отбора."
  }];
  
  return (
    <section id="features" className="section-padding bg-white px-4 sm:px-6">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Функции, които правят разликата</h2>
          <p className="section-subtitle mt-3 text-base sm:text-lg">
            SureGo съдържа всичко, от което се нуждаете за безпроблемна организация на футболни събития
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map(feature => (
            <Card 
              key={feature.id} 
              style={{ animationDelay: `${0.1 * feature.id}s` }} 
              className="border border-gray-100 hover:bg-[#ffc100]/5 hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden group"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 transition-colors bg-[#f4f4f4]">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
