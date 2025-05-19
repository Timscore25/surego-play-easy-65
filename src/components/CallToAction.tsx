
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CallToAction = () => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden px-4 sm:px-6">
      {/* Abstract sporty shape in background */}
      <div className="absolute inset-0 overflow-hidden opacity-100 bg-[#ffc100]">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white/20"></div>
      </div>
      
      <div className="app-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-950">{t('ctaTitle')}</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-10 text-gray-950">
            {t('ctaSubtitle')}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="#" className="inline-flex justify-center w-auto mx-auto">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                alt="Download on the App Store" 
                className="h-14 w-auto"
              />
            </a>
            <a href="#" className="inline-flex justify-center w-auto mx-auto">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                alt="Get it on Google Play" 
                className="h-14 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      
      {/* Soccer ball and shoes image */}
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 h-auto z-10 pointer-events-none hidden md:block">
        <img 
          src="/lovable-uploads/3c9d25ce-626b-4809-9f5f-23be1658e9e2.png" 
          alt="Soccer ball and shoes" 
          className="w-full h-auto"
        />
      </div>
      
      {/* Mobile sticky button */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
        <button className="w-full bg-[#ffc100] hover:bg-warmyellow-500 text-black py-3 rounded-full shadow-lg flex items-center justify-center gap-2 font-medium">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
            <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
          </svg>
          <span>{t('downloadApp')}</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
