
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return <section id="hero" className="pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12 lg:pb-16 bg-gradient-to-b from-dbeafe to-white overflow-hidden bg-[#11e7ef]">
      <div className="app-container">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 px-4 md:px-0">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in mt-8 lg:mt-0" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a href="https://apps.apple.com/bg/app/surego/id1671429121" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto mx-auto sm:mx-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-14 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.intellicsengineering.surego2" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto mx-auto sm:mx-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -translate-y-4 scale-110 bg-gradient-to-b from-[#ffc100] to-[#ffc100] rounded-[3rem] transform rotate-6"></div>
              <img 
                alt="SureGo App Screenshot" 
                className="relative z-10 w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto rounded-[2.5rem]" 
                src="/lovable-uploads/17766a79-2e88-44e3-9903-80404c181c1b.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
