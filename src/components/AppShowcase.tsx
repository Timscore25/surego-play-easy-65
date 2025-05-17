
const AppShowcase = () => {
  const screenshots = [
    {
      title: "Екран с играчи",
      img: "/placeholder.svg",
    },
    {
      title: "Организиране на мач",
      img: "/placeholder.svg",
    },
    {
      title: "Плащания и статистика",
      img: "/placeholder.svg",
    },
  ];

  return (
    <section id="app-showcase" className="section-padding bg-gradient-to-b from-dbeafe to-white">
      <div className="app-container">
        <h2 className="section-title text-center mb-8">Вижте приложението в действие</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-10 md:mt-12">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="relative w-64 h-auto animate-fade-in" 
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                index === 0 ? 'from-primary/20 to-primary/30' :
                index === 1 ? 'from-primary/20 to-primary/30' :
                'from-primary/20 to-primary/30'
              } rounded-[2rem] transform ${
                index === 0 ? '-rotate-6' :
                index === 1 ? 'rotate-0' :
                'rotate-6'
              }`}></div>
              <div className="relative z-10 bg-white border-8 border-gray-100 rounded-[2rem] shadow-lg overflow-hidden">
                <img
                  src={screenshot.img}
                  alt={screenshot.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center text-sm">
                  {screenshot.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
