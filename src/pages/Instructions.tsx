
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";

const Instructions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="app-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('instructionsTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('instructionsSubtitle')}
            </p>
          </div>

          {/* Instructions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('downloadTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('downloadContent')}
              </p>
              <div className="flex gap-4 mt-6">
                <img 
                  src="/lovable-uploads/b20c0027-a11f-4e38-bcfc-3908e8d244d0.png" 
                  alt="Download on App Store"
                  className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
                />
                <img 
                  src="/lovable-uploads/9255faf1-6101-422c-92e6-3bcb0da928c4.png" 
                  alt="Get it on Google Play"
                  className="h-10 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('registerTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('registerContent')}
              </p>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/19450552-6c39-4408-8801-04f3ac0823d7.png"
                  alt="Registration options"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('teamTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('teamContent')}
              </p>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/4444e586-7ebd-49f0-9012-6a0b9d653755.png"
                  alt="Create team interface"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('playersTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('playersContent')}
              </p>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/6ba0458e-2518-4c24-a53a-56cb1bfe1a77.png"
                  alt="Add players interface"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('eventTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('eventContent')}
              </p>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/4047db49-2425-4ba4-bef2-19818a4f2a04.png"
                  alt="Organize event interface"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-lg">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('trackTitle')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('trackContent')}
              </p>
              <div className="mt-6">
                <img 
                  src="/lovable-uploads/5abce6fb-d576-4966-8d96-b538774bd209.png"
                  alt="Track confirmations interface"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('ctaSubtitle')}
            </p>
            <div className="flex justify-center gap-4">
              <img 
                src="/lovable-uploads/b20c0027-a11f-4e38-bcfc-3908e8d244d0.png" 
                alt="Download on App Store"
                className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="/lovable-uploads/9255faf1-6101-422c-92e6-3bcb0da928c4.png" 
                alt="Get it on Google Play"
                className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
