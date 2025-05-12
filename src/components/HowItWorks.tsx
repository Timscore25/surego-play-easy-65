
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
    <section id="how-it-works" className="section-padding blue-dark-bg relative">
      {/* Curved top edge */}
      <div className="curve-top" style={{ background: 'linear-gradient(to bottom left, transparent 49%, #7ca7c4 50%)' }}></div>
      
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white mb-4">Как работи SureGo?</h2>
          <p className="text-lg text-white/80">
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
                <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold relative">
                  {step.number}
                  <div className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping"></div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block h-14 border-l-2 border-dashed border-accent/30 absolute ml-8 mt-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-[200%] h-20 md:h-24 lg:h-32 animate-wave"
          style={{ fill: '#b6d6ea', transform: 'rotate(180deg)' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
