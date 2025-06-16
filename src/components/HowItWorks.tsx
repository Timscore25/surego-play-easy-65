
import { Users, Calendar, UserPlus, Trophy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      icon: Users,
      titleKey: 'howItWorksStep1Title',
      descriptionKey: 'howItWorksStep1Description',
      image: "/lovable-uploads/37954cb1-92f0-48e6-8137-51b25ec50dc8.png"
    },
    {
      icon: UserPlus,
      titleKey: 'howItWorksStep2Title',
      descriptionKey: 'howItWorksStep2Description',
      image: "/lovable-uploads/d0206bce-a75e-4838-a98a-061bd514bf0c.png"
    },
    {
      icon: Calendar,
      titleKey: 'howItWorksStep3Title',
      descriptionKey: 'howItWorksStep3Description',
      image: "/lovable-uploads/134974be-f26c-4be3-879c-9deee3182d28.png"
    },
    {
      icon: Trophy,
      titleKey: 'howItWorksStep4Title',
      descriptionKey: 'howItWorksStep4Description',
      image: "/lovable-uploads/b60de349-68b2-4a71-905f-a09cdfe6c743.png"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="app-container">
        <div className="text-center mb-12">
          <h2 className="section-title text-gray-900">{t('howItWorksTitle')}</h2>
          <p className="section-subtitle">{t('howItWorksSubtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              
              <div className="mb-6">
                <img 
                  src={step.image}
                  alt={t(step.titleKey)}
                  className="w-48 h-auto mx-auto rounded-lg shadow-md"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(step.titleKey)}</h3>
              <p className="text-gray-600">{t(step.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
