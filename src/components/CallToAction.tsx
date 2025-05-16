
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding relative bg-gradient-to-br from-primary/95 via-primary to-secondary/95 text-white overflow-hidden">
      {/* Abstract background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated circles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute w-96 h-96 rounded-full bg-white/10"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ top: '10%', left: '5%' }}
          ></motion.div>
          <motion.div 
            className="absolute w-64 h-64 rounded-full bg-white/5"
            animate={{
              x: [0, -70, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ top: '50%', right: '10%' }}
          ></motion.div>
          <motion.div 
            className="absolute w-48 h-48 rounded-full bg-white/5"
            animate={{
              x: [0, 50, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ bottom: '10%', left: '30%' }}
          ></motion.div>
        </div>
        
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(0,0,0,0))]"></div>
      </div>
      
      <div className="app-container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium inline-flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span>Без абонамент | Без скрити такси</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Готов ли си да организираш мачове <span className="relative inline-block">
              <span className="relative z-10">без главоболия?</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-white/20 -z-10"></span>
            </span>
          </h2>
          
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Свали SureGo сега и се присъедини към хилядите отбори, които вече организират футболни събития лесно и бързо.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button className="bg-white hover:bg-white/90 text-primary py-7 px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl flex items-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 13.8l.5-1c.6-1 .3-2.2-.3-3.1-.5-.8-1.6-1.7-3-1.7h-.1c-.6 0-1.2.2-1.9.5-1.1.5-2.1 1.4-3 2.7-.8 1.3-1.4 2.8-1.5 4.4 0 1.1.2 2 .6 2.8.4.7 1.1 1.3 1.9 1.6.4.1.7.2 1.1.2.9 0 1.7-.5 2.6-1.3.9-.8 1.8-1.9 2.5-3 .7-1 1-2 1-2.8 0-.4-.1-.7-.2-1-.1.1-.1.1-.2.2-.3.4-.5.7-.5 1.1 0 .2.1.4.2.5 0 .1.1.2.1.3 0 .3-.1.7-.5 1.1-.5.5-1.4 1-2.1 1h-.2c-.3 0-.5-.1-.7-.2-.3-.2-.4-.5-.4-1 0-.4.1-.9.3-1.3.2-.4.5-.7.8-1 .3-.2.6-.3.9-.3.3 0 .6.1.8.3.2.2.4.5.5.9.1.3.1.7.1 1 0 .3-.1.6-.2.9l-.5 1.1c-.3.6-.8 1.1-1.2 1.5-.5.4-1 .6-1.4.6-.3 0-.5-.1-.7-.2-.4-.2-.7-.6-.9-1.1-.2-.5-.3-1.2-.3-2 .1-1.2.5-2.5 1.2-3.6.7-1.1 1.5-1.9 2.4-2.3.5-.2.9-.3 1.4-.3h.1c.7 0 1.4.3 1.9.9.6.6.9 1.5.9 2.4 0 1.5-1.3 3.5-2.6 4.6-.7.6-1.5.9-2.2.9-.2 0-.4 0-.6-.1-.5-.1-.9-.5-1.2-.9-.3-.5-.5-1.1-.5-1.9 0-1.3.5-2.6 1.2-3.6.7-1 1.5-1.8 2.2-2.2.4-.2.9-.3 1.3-.3.7 0 1.3.3 1.8.9.5.6.7 1.5.5 2.5l-.1.3c0 .1-.1.1-.1.2z"/>
              </svg>
              <span>App Store</span>
            </Button>
            <Button className="bg-neutral-900 hover:bg-neutral-800 text-white py-7 px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl flex items-center gap-2 border border-white/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z"/>
                <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z"/>
              </svg>
              <span>Google Play</span>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white/70">256-битово криптиране</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">14-дневен безплатен достъп</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <span className="text-white/70">Експортиране на данни</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Mobile sticky button */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-6">
        <button className="w-full bg-white text-primary py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-medium">
          <Download className="h-5 w-5" />
          <span>Свали SureGo безплатно</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
