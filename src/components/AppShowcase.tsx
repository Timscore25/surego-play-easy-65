
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
          <div className="flex justify-start lg:justify-center gap-6 lg:gap-4 xl:gap-8 mt-8 md:mt-12 pb-4 px-4 min-w-max">
            {screenshotsWithTitles.map((screenshot, index) => (
              <div key={index} className="flex flex-col items-center max-w-[260px]">
                {/* Card container with phone */}
                <div className="relative w-[260px] h-auto animate-fade-in hover:-translate-y-2 transition-transform duration-300" 
                  style={{
                    animationDelay: `${0.2 + index * 0.2}s`
                  }}
                >
                  {/* Colored background card with tilt effect */}
                  <div 
                    className="absolute inset-0 bg-[#ffc100] rounded-[2rem]" 
                    style={{ 
                      transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                      zIndex: 5
                    }}
                  ></div>
                  
                  {/* Soccer ball decoration - using the provided SVG URL */}
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg" 
                    alt="Soccer ball"
                    className="absolute top-2 right-2 z-20 w-6 h-6"
                  />
                  
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
                
                {/* Title shown below the card - updated with better highlighting */}
                <div className="mt-5 text-center px-4 py-2 bg-gradient-to-r from-[#ffc100] to-[#ffda6a] rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="text-gray-800 uppercase font-roboto text-base whitespace-nowrap font-medium tracking-wide">{screenshot.title}</span>
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
