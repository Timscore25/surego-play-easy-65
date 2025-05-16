
import { Calendar, Users, Bell, Scale, Wallet, BarChart, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "AI организация",
      description: "ИИ асистент, който се грижи за всички детайли по организацията на мачовете."
    },
    {
      id: 2,
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Управление на играчи",
      description: "Интелигентно групиране по позиции, умения и специални роли в отбора."
    },
    {
      id: 3,
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: "Умни известия",
      description: "Персонализирани напомняния и автоматични нотификации за всеки участник."
    },
    {
      id: 4,
      icon: <Scale className="h-10 w-10 text-primary" />,
      title: "Балансирани отбори",
      description: "Алгоритъм за създаване на максимално балансирани и конкурентни отбори."
    },
    {
      id: 5,
      icon: <Wallet className="h-10 w-10 text-primary" />,
      title: "Дигитални плащания",
      description: "Интеграция с дигитални портфейли и автоматично разделяне на разходи."
    },
    {
      id: 6,
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Детайлна статистика",
      description: "Задълбочени анализи за игри, играчи, финанси и представяне на отбора."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="features" className="section-padding bg-neutral-50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(100,100,255,0.1),rgba(0,0,0,0))]"></div>
        <div className="absolute w-96 h-96 -top-48 -left-48 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            Революционни възможности
          </div>
          <h2 className="section-title mb-4">Функции с <span className="gradient-text">изкуствен интелект</span></h2>
          <p className="section-subtitle mx-auto">
            SureGo използва последните технологични достижения, за да направи организацията на футболни събития напълно автоматизирана
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.id}
              variants={item}
              className="gradient-border group"
            >
              <div className="bg-white rounded-2xl p-8 h-full transform transition-transform duration-300 group-hover:scale-[0.98]">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-60"></div>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
                
                <div className="mt-8 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Включено във всички планове</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
