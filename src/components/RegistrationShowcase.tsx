
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const RegistrationShowcase = () => {
  const { t } = useLanguage();
  
  const registrationSteps = [
    {
      title: t('regStep1Title'),
      description: t('regStep1Desc'),
      img: "/placeholder.svg",
      isDownload: true
    },
    {
      title: t('regStep2Title'),
      description: t('regStep2Desc'),
      img: "/placeholder.svg"
    },
    {
      title: t('regStep3Title'),
      description: t('regStep3Desc'),
      img: "/placeholder.svg"
    },
    {
      title: t('regStep4Title'),
      description: t('regStep4Desc'),
      img: "/placeholder.svg"
    }
  ];
  
  return (
    <section id="registration" className="relative section-padding bg-gradient-to-b from-white to-dbeafe pt-16 md:pt-24 px-4 sm:px-6">
      <div className="app-container">
        <h2 className="section-title text-center mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">{t('registrationTitle')}</h2>
        
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
                    <a href="https://apps.apple.com/bg/app/surego/id1671429121" target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                        alt="Download on the App Store" 
                        className="h-10 w-auto"
                      />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.intellicsengineering.surego2" target="_blank" rel="noopener noreferrer" className="inline-block no-underline">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                        alt="Get it on Google Play" 
                        className="h-10 w-auto"
                      />
                    </a>
                  </div>
                )}
              </CardContent>
              
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
