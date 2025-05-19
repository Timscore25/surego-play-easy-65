
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
            <Card key={index} className="bg-white border-0 rounded-2xl overflow-hidden shadow-lg animate-fade-in" style={{
              animationDelay: `${0.1 + index * 0.1}s`
            }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-tr from-[#e0f2fe] to-[#bae6fd]">
                <img src={step.img} alt={step.title} className="w-full h-full object-contain p-4" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{step.description}</p>
                
                {step.isDownload && (
                  <div className="flex flex-col sm:flex-row gap-2 mt-2">
                    <Button className="py-2 px-4 rounded-xl flex items-center gap-2 bg-[#ffc000] text-gray-950 text-xs sm:text-sm">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.6 13.8l.5-1c.6-1 .3-2.2-.3-3.1-.5-.8-1.6-1.7-3-1.7h-.1c-.6 0-1.2.2-1.9.5-1.1.5-2.1 1.4-3 2.7-.8 1.3-1.4 2.8-1.5 4.4 0 1.1.2 2 .6 2.8.4.7 1.1 1.3 1.9 1.6.4.1.7.2 1.1.2.9 0 1.7-.5 2.6-1.3.9-.8 1.8-1.9 2.5-3 .7-1 1-2 1-2.8 0-.4-.1-.7-.2-1-.1.1-.1.1-.2.2-.3.4-.5.7-.5 1.1 0 .2.1.4.2.5 0 .1.1.2.1.3 0 .3-.1.7-.5 1.1-.5.5-1.4 1-2.1 1h-.2c-.3 0-.5-.1-.7-.2-.3-.2-.4-.5-.4-1 0-.4.1-.9.3-1.3.2-.4.5-.7.8-1 .3-.2.6-.3.9-.3.3 0 .6.1.8.3.2.2.4.5.5.9.1.3.1.7.1 1 0 .3-.1.6-.2.9l-.5 1.1c-.3.6-.8 1.1-1.2 1.5-.5.4-1 .6-1.4.6-.3 0-.5-.1-.7-.2-.4-.2-.7-.6-.9-1.1-.2-.5-.3-1.2-.3-2 .1-1.2.5-2.5 1.2-3.6.7-1.1 1.5-1.9 2.4-2.3.5-.2.9-.3 1.4-.3h.1c.7 0 1.4.3 1.9.9.6.6.9 1.5.9 2.4 0 1.5-1.3 3.5-2.6 4.6-.7.6-1.5.9-2.2.9-.2 0-.4 0-.6-.1-.5-.1-.9-.5-1.2-.9-.3-.5-.5-1.1-.5-1.9 0-1.3.5-2.6 1.2-3.6.7-1 1.5-1.8 2.2-2.2.4-.2.9-.3 1.3-.3.7 0 1.3.3 1.8.9.5.6.7 1.5.5 2.5l-.1.3c0 .1-.1.1-.1.2z" />
                      </svg>
                      <span>App Store</span>
                    </Button>
                    <Button className="py-2 px-4 rounded-xl flex items-center gap-2 bg-[#ffc100] text-gray-950 text-xs sm:text-sm">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z" />
                        <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z" />
                      </svg>
                      <span>Google Play</span>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationShowcase;
