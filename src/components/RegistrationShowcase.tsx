
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const RegistrationShowcase = () => {
  const registrationSteps = [
    {
      title: "Изтеглете приложението",
      description: "Достъпно в App Store и Google Play",
      img: "/placeholder.svg",
      isDownload: true
    },
    {
      title: "Изберете начин за регистрация",
      description: "Няколко лесни начина за създаване на профил",
      img: "/placeholder.svg"
    },
    {
      title: "Регистрация с имейл",
      description: "Въведете вашите данни за бърза регистрация",
      img: "/placeholder.svg"
    },
    {
      title: "Активирайте профила си",
      description: "Потвърдете и започнете да използвате приложението",
      img: "/placeholder.svg"
    }
  ];
  
  return (
    <section id="registration" className="relative section-padding bg-gradient-to-b from-white to-dbeafe pt-16 md:pt-24 px-4 sm:px-6">
      <div className="app-container">
        <h2 className="section-title text-center mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">Създаване на профил</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-12">
          {registrationSteps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-white border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in transform hover:-translate-y-1" 
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                backgroundImage: index % 2 === 0 ? 
                  'linear-gradient(to bottom right, rgba(37, 99, 235, 0.05), rgba(255, 193, 0, 0.1))' : 
                  'linear-gradient(to bottom right, rgba(255, 193, 0, 0.05), rgba(37, 99, 235, 0.1))',
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Football field pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-green-600 rounded-lg"></div>
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-green-600 rounded-full"></div>
                  {/* Center line */}
                  <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-0.5 bg-green-600"></div>
                </div>
                <img src={step.img} alt={step.title} className="w-full h-full object-contain p-4" />
              </div>
              <CardContent className="p-5 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{step.description}</p>
                
                {step.isDownload && (
                  <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <a href="#" className="inline-block no-underline">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="Download on the App Store" 
                        className="h-10 w-auto"
                      />
                    </a>
                    <Button className="py-2 px-4 rounded-xl flex items-center gap-2 bg-[#ffc100] text-gray-950 text-xs sm:text-sm hover:bg-[#ffd43b] transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z" />
                        <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z" />
                      </svg>
                      <span>Google Play</span>
                    </Button>
                  </div>
                )}
              </CardContent>
              
              {/* Decorative football elements */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 shadow flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex flex-wrap">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="w-1/2 h-1/2 border border-gray-400" style={{ 
                        background: i % 2 === 0 ? 'white' : 'black' 
                      }}></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Step number indicator */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#ffc100] text-gray-950 flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationShowcase;
