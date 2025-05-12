
import { Calendar, Users, Bell, Scale, Wallet, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Calendar className="h-10 w-10 text-accent" />,
      title: "Създаване на мачове и тренировки",
      description: "Бързо планиране и управление на футболни събития с всички необходими детайли."
    },
    {
      id: 2,
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Управление на играчи с роли и позиции",
      description: "Организирайте играчите по позиции, умения и специални роли в отбора."
    },
    {
      id: 3,
      icon: <Bell className="h-10 w-10 text-accent" />,
      title: "Автоматични покани и известия",
      description: "Автоматично изпращане на покани и напомняния към играчите за предстоящи мачове."
    },
    {
      id: 4,
      icon: <Scale className="h-10 w-10 text-accent" />,
      title: "Балансиране на отбори",
      description: "Интелигентно разпределение на играчи за балансирани и конкурентни отбори."
    },
    {
      id: 5,
      icon: <Wallet className="h-10 w-10 text-accent" />,
      title: "Проследяване на каса и плащания",
      description: "Лесно проследяване на внесените суми и общия баланс на отбора."
    },
    {
      id: 6,
      icon: <BarChart className="h-10 w-10 text-accent" />,
      title: "Игрова статистика и история",
      description: "Преглед на статистики за мачове, посещаемост и представяне на отбора."
    }
  ];

  return (
    <section id="features" className="section-padding blue-dark-bg relative">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="section-title text-white">Функции, които правят разликата</h2>
          <p className="text-lg text-white/80">
            SureGo съдържа всичко, от което се нуждаете за безпроблемна организация на футболни събития
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="white-card hover:shadow-xl transition-all duration-300 animate-fade-in border-none overflow-hidden group"
              style={{ animationDelay: `${0.1 * feature.id}s` }}
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-accent/10 w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
