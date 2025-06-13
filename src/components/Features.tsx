
import { Calendar, Users, Bell, Scale, Wallet, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [{
    id: 1,
    icon: <Calendar className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />,
    title: t('feature1Title'),
    description: t('feature1Desc')
  }, {
    id: 2,
    icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />,
    title: t('feature2Title'),
    description: t('feature2Desc')
  }, {
    id: 3,
    icon: <Bell className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />,
    title: t('feature3Title'),
    description: t('feature3Desc')
  }, {
    id: 4,
    icon: <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />,
    title: t('feature4Title'),
    description: t('feature4Desc')
  }, {
    id: 5,
    icon: <Wallet className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />,
    title: t('feature5Title'),
    description: t('feature5Desc')
  }, {
    id: 6,
    icon: <BarChart className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />,
    title: t('feature6Title'),
    description: t('feature6Desc')
  }];
  
  return (
    <section id="features" className="section-padding bg-white px-4 sm:px-6">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">{t('featuresTitle')}</h2>
          <p className="section-subtitle mt-3 text-base sm:text-lg">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map(feature => (
            <Card 
              key={feature.id} 
              style={{ animationDelay: `${0.1 * feature.id}s` }} 
              className="border border-gray-100 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 animate-fade-in overflow-hidden group"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 transition-colors bg-gradient-to-br from-purple-100 to-green-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
