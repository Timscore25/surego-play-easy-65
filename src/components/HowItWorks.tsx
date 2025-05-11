
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Свали приложението",
      description: "Изтеглете SureGo от App Store или Google Play безплатно."
    },
    {
      number: "02",
      title: "Създай профил",
      description: "Бързо регистриране с Google, Apple ID или имейл."
    },
    {
      number: "03",
      title: "Направи отбор",
      description: "Създайте своя отбор и настройте основните му параметри."
    },
    {
      number: "04",
      title: "Добави играчи",
      description: "Поканете играчи с телефон или SureGo ID към вашия отбор."
    },
    {
      number: "05",
      title: "Организирай събитие",
      description: "Задайте дата, час, локация и условия за участие."
    },
    {
      number: "06",
      title: "Следи потвърждения и плащания",
      description: "Наблюдавайте кой е потвърдил и платил за участие."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-dbeafe/50 to-white">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Как работи SureGo?</h2>
          <p className="section-subtitle">
            Само шест лесни стъпки ви делят от перфектно организираните футболни събития
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block h-14 border-l-2 border-dashed border-primary/30 absolute ml-8 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
