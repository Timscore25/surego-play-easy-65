
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Users, Calendar, BarChart3, DollarSign, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Instructions = () => {
  const { t } = useLanguage();

  const instructionSections = [
    {
      id: "quick-start",
      title: t('quickStart'),
      description: t('quickStartDesc'),
      icon: Play,
      color: "bg-green-100 text-green-600"
    },
    {
      id: "player-management", 
      title: t('playerManagement'),
      description: t('playerManagementDesc'),
      icon: Users,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: "event-organization",
      title: t('eventOrganization'), 
      description: t('eventOrganizationDesc'),
      icon: Calendar,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: "team-balancing",
      title: t('teamBalancing'),
      description: t('teamBalancingDesc'), 
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: "payment-tracking",
      title: t('paymentTracking'),
      description: t('paymentTrackingDesc'),
      icon: DollarSign, 
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      id: "advanced-features",
      title: t('advancedFeatures'),
      description: t('advancedFeaturesDesc'),
      icon: Settings,
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="app-container">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors">
              <ArrowLeft className="mr-2" size={20} />
              {t('backToMain')}
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('instructionsTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('instructionsSubtitle')}
            </p>
          </div>

          {/* Instructions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructionSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={section.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center mb-6`}>
                    <IconComponent size={32} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {section.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // This would typically open a detailed instructions modal or navigate to a detailed page
                      console.log(`Opening instructions for: ${section.id}`);
                    }}
                  >
                    Виж инструкции
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('ctaSubtitle')}
            </p>
            <Button size="lg" className="text-lg px-8 py-4">
              {t('downloadApp')}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Instructions;
