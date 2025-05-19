
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
        { title: t('screenshot1Title'), img: screenshots?.[0] || "/placeholder.svg" },
        { title: t('screenshot2Title'), img: screenshots?.[1] || "/placeholder.svg" },
        { title: t('screenshot3Title'), img: screenshots?.[2] || "/placeholder.svg" },
        { title: t('screenshot4Title'), img: screenshots?.[3] || "/placeholder.svg" }
      ]
    : appScreenshots;
  
  return (
    <section id="app-showcase" className="relative section-padding bg-gradient-to-b from-dbeafe to-white pt-16 md:pt-24 px-4 sm:px-6">
      <div className="app-container">
        <h2 className="section-title text-center mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">{t('appShowcaseTitle')}</h2>
        
        <ScrollArea className="w-full">
          <div className="flex justify-center lg:justify-between gap-6 lg:gap-4 xl:gap-8 mt-8 md:mt-12 pb-4 min-w-max">
            {screenshotsWithTitles.map((screenshot, index) => (
              <div key={index} className="flex flex-col items-center max-w-[260px]">
                {/* Card container with phone */}
                <div className="relative w-56 sm:w-64 md:w-[260px] h-auto animate-fade-in hover:-translate-y-2 transition-transform duration-300" 
                  style={{
                    animationDelay: `${0.2 + index * 0.2}s`
                  }}
                >
                  {/* Colored background card with tilt effect */}
                  <div 
                    className="absolute inset-0 bg-[#ffc100] rounded-[2rem] shadow-lg" 
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                      zIndex: 5
                    }}
                  ></div>
                  
                  {/* Football decoration */}
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
                  
                  {/* Phone image directly on top of colored card */}
                  <div className="relative z-10 rounded-[2rem] overflow-hidden pt-2 pb-4 px-1">
                    <img 
                      src={screenshot.img} 
                      alt={screenshot.title} 
                      className="max-w-full h-auto object-contain"
                      style={{
                        transform: "scale(1.1)"
                      }}
                    />
                  </div>
                </div>
                
                {/* Title shown below the card with improved styling */}
                <div className="mt-5 text-center font-bold px-2 py-1 text-lg font-serif tracking-wide bg-warmyellow-100/30 rounded-lg border-b-2 border-warmyellow-400">
                  <span className="block text-gray-800">{screenshot.title}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default AppShowcase;
