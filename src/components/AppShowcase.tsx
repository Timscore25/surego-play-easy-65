
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AppShowcase = () => {
  const screenshots = [
    {
      title: "Организация на мачове",
      img: "/placeholder.svg",
      color: "from-blue-400/20 to-indigo-400/30",
      description: "Създаване и управление на събития с цялата нужна информация."
    },
    {
      title: "Управление на играчи",
      img: "/placeholder.svg",
      color: "from-violet-400/20 to-purple-400/30",
      description: "Проследяване на участие, роли и статистики на играчите."
    },
    {
      title: "Автоматични плащания",
      img: "/placeholder.svg",
      color: "from-fuchsia-400/20 to-pink-400/30",
      description: "Интегрирана система за следене и управление на финанси."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <section id="app-showcase" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,255,0.2),rgba(0,0,0,0))]"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 blob-shape bg-primary/5"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 blob-shape bg-secondary/5"></div>
      </div>
      
      <div className="app-container">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            Мощни функции
          </div>
          <h2 className="section-title gradient-text inline-block mb-6">Вижте приложението в действие</h2>
          <p className="section-subtitle mx-auto">
            SureGo е проектирано за максимална простота и ефективност при организиране на футболни събития
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Feature Navigation */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-6">
              {screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    activeIndex === index 
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 shadow-lg" 
                      : "hover:bg-neutral-100"
                  }`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${
                    activeIndex === index ? "text-primary" : "text-neutral-600"
                  }`}>
                    {screenshot.title}
                  </h3>
                  <p className="text-neutral-500">
                    {screenshot.description}
                  </p>
                  
                  <div className={`w-full h-1 mt-4 rounded-full bg-neutral-200 overflow-hidden ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}>
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, repeat: activeIndex === index ? Infinity : 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* App Screenshots */}
          <div className="w-full lg:w-2/3 relative h-[600px] flex items-center justify-center">
            <div className="w-80 h-[600px] relative">
              {screenshots.map((screenshot, index) => (
                <motion.div 
                  key={index}
                  className="absolute top-0 left-0 w-full h-auto"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    scale: activeIndex === index ? 1 : 0.8,
                    rotateY: activeIndex === index ? 0 : -30,
                    zIndex: activeIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br ${screenshot.color} blur-xl -z-10`}></div>
                    <div className="relative overflow-hidden rounded-[2.5rem] border-[14px] border-black shadow-2xl">
                      <div className="absolute top-0 left-0 w-full h-12 bg-black z-20 flex items-center justify-center">
                        <div className="w-24 h-6 rounded-full bg-neutral-900"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10 mix-blend-overlay z-10 pointer-events-none"></div>
                      <img
                        src={screenshot.img}
                        alt={screenshot.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md text-white p-4 text-center">
                        <p className="font-medium">{screenshot.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
