
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
    <section id="app-showcase" className="relative section-padding bg-gradient-to-b from-dbeafe to-white pt-24">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden -mt-1 line-height-0">
        <svg 
          className="w-full h-16 md:h-24"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#ffc100"
          ></path>
        </svg>
      </div>

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
                index === 0 ? 'from-[#ffc100]/20 to-[#ffc100]/30' :
                index === 1 ? 'from-[#ffc100]/20 to-[#ffc100]/30' :
                'from-[#ffc100]/20 to-[#ffc100]/30'
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
