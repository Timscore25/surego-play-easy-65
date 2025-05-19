
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
                    <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center overflow-hidden relative">
                      {/* Football SVG */}
                      <svg 
                        viewBox="0 0 297 297" 
                        className="w-5 h-5" 
                        fill="currentColor"
                      >
                        <path d="M148.5,0C66.617,0,0,66.617,0,148.5S66.617,297,148.5,297S297,230.383,297,148.5S230.383,0,148.5,0z M148.5,33.091
                         c16.498,0,32.423,3.251,47.006,9.684l-34.163,28.383L148.5,33.091z M87.587,51.905l39.17,2.522L73.805,88.321
                         C77.396,75.227,81.668,63.296,87.587,51.905z M90.175,232.973c-5.919-11.391-10.191-23.322-13.781-36.419l52.952,33.896
                         L90.175,232.973z M148.5,264.5c-16.498,0-32.423-3.251-47.006-9.684l34.163-28.383L148.5,264.5z M180.934,220.194l-32.434-20.891
                         l-32.434,20.891l12.393-38.14l-32.434-20.892h40.083l12.393-38.141l12.393,38.141h40.083l-32.434,20.892L180.934,220.194z
                         M209.467,245.095l-39.17-2.522l52.952-33.895C219.657,221.774,215.386,233.705,209.467,245.095z M206.879,64.028
                         c5.918,11.391,10.19,23.322,13.781,36.417l-52.952-33.895L206.879,64.028z M148.5,127.608l-12.393,38.14h-40.083l32.434,20.892
                         l-12.393,38.14l32.434-20.892l32.434,20.892l-12.393-38.14l32.434-20.892H160.89L148.5,127.608z"/>
                      </svg>
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
                
                {/* Title shown below the card with updated styling for white background and cyrillic-style font */}
                <div className="mt-5 text-center font-extrabold px-3 py-2 text-lg tracking-wider bg-white rounded-lg shadow-md border-2 border-[#11e7ef]">
                  <span className="block text-gray-800 font-[Roboto] uppercase">{screenshot.title}</span>
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
