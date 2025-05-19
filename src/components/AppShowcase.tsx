
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";

interface AppShowcaseProps {
  screenshots?: string[];
}

const AppShowcase = ({ screenshots }: AppShowcaseProps) => {
  const { t } = useLanguage();
  
  // Use provided screenshots or fallback to placeholders
  const appScreenshots = screenshots || [{
    title: t('screenshot1Title'),
    img: "/placeholder.svg"
  }, {
    title: t('screenshot2Title'),
    img: "/placeholder.svg"
  }, {
    title: t('screenshot3Title'),
    img: "/placeholder.svg"
  }, {
    title: t('screenshot4Title'),
    img: "/placeholder.svg"
  }];
  
  // If we have raw image paths, convert them to objects with titles
  const screenshotsWithTitles = Array.isArray(appScreenshots[0]) || typeof appScreenshots[0] === 'string' 
    ? [
        { title: t('screenshot2Title'), img: screenshots?.[0] || "/placeholder.svg" },
        { title: t('screenshot1Title'), img: screenshots?.[1] || "/placeholder.svg" },
        { title: t('screenshot3Title'), img: screenshots?.[2] || "/placeholder.svg" },
        { title: t('screenshot4Title'), img: screenshots?.[3] || "/placeholder.svg" }
      ]
    : appScreenshots;
  
  return (
    <section id="app-showcase" className="relative section-padding bg-gradient-to-b from-dbeafe to-white pt-16 md:pt-24 px-4 sm:px-6">
      <div className="app-container">
        <h2 className="section-title text-center mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">{t('appShowcaseTitle')}</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-12">
          {screenshotsWithTitles.map((screenshot, index) => (
            <div key={index} className="relative w-48 sm:w-56 md:w-64 h-auto animate-fade-in hover:-translate-y-2 transition-transform duration-300" style={{
              animationDelay: `${0.2 + index * 0.2}s`
            }}>
              {/* Football decoration in the corner instead of on a card */}
              <div className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center">
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
              
              {/* Phone image with subtle styling */}
              <div className="relative z-10 overflow-hidden">
                <img 
                  src={screenshot.img} 
                  alt={screenshot.title} 
                  className="w-full h-auto rounded-[2rem] shadow-lg" 
                />
                
                {/* Title overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 sm:p-3 text-center text-xs sm:text-sm backdrop-blur-sm">
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
