
import { ScrollArea } from "@/components/ui/scroll-area";

const AppShowcase = () => {
  const screenshots = [{
    title: "Екран с играчи",
    img: "/placeholder.svg"
  }, {
    title: "Организиране на мач",
    img: "/placeholder.svg"
  }, {
    title: "Плащания и статистика",
    img: "/placeholder.svg"
  }];
  
  return (
    <section id="app-showcase" className="relative section-padding bg-gradient-to-b from-dbeafe to-white pt-16 md:pt-24 px-4 sm:px-6">
      <div className="app-container">
        <h2 className="section-title text-center mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl">Вижте приложението в действие</h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8 md:mt-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="relative w-48 sm:w-56 md:w-64 h-auto animate-fade-in" style={{
              animationDelay: `${0.2 + index * 0.2}s`
            }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-[#ffc100]/20 to-[#ffc100]/30' : index === 1 ? 'from-[#ffc100]/20 to-[#ffc100]/30' : 'from-[#ffc100]/20 to-[#ffc100]/30'} rounded-[2rem] transform ${index === 0 ? '-rotate-6' : index === 1 ? 'rotate-0' : 'rotate-6'}`}></div>
              <div className="relative z-10 bg-white border-8 border-gray-100 rounded-[2rem] shadow-lg overflow-hidden">
                <img src={screenshot.img} alt={screenshot.title} className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 sm:p-3 text-center text-xs sm:text-sm">
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
