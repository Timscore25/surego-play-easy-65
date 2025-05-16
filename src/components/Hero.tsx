
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden bg-gradient-to-b from-primary/5 to-secondary/10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="blob-shape absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 mix-blend-multiply"></div>
        <div className="blob-shape absolute top-1/2 -right-1/4 w-2/3 h-2/3 bg-secondary/10 mix-blend-multiply"></div>
        <div className="blob-shape absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-accent/10 mix-blend-multiply"></div>
        <div className="absolute inset-0 backdrop-blur-3xl opacity-30"></div>
      </div>

      <div className="app-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in space-y-8" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary font-medium mb-4">
              Версия 2025.1 • Вече налична в App Store и Google Play
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="gradient-text">Забрави хаоса</span> – организирай футболни събития с AI
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
              Първото приложение с изкуствен интелект за организиране на футболни мачове – от плащания до анализи, всичко е автоматизирано.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button className="pill-button bg-gradient-to-r from-primary to-secondary text-white py-7 px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 13.8l.5-1c.6-1 .3-2.2-.3-3.1-.5-.8-1.6-1.7-3-1.7h-.1c-.6 0-1.2.2-1.9.5-1.1.5-2.1 1.4-3 2.7-.8 1.3-1.4 2.8-1.5 4.4 0 1.1.2 2 .6 2.8.4.7 1.1 1.3 1.9 1.6.4.1.7.2 1.1.2.9 0 1.7-.5 2.6-1.3.9-.8 1.8-1.9 2.5-3 .7-1 1-2 1-2.8 0-.4-.1-.7-.2-1-.1.1-.1.1-.2.2-.3.4-.5.7-.5 1.1 0 .2.1.4.2.5 0 .1.1.2.1.3 0 .3-.1.7-.5 1.1-.5.5-1.4 1-2.1 1h-.2c-.3 0-.5-.1-.7-.2-.3-.2-.4-.5-.4-1 0-.4.1-.9.3-1.3.2-.4.5-.7.8-1 .3-.2.6-.3.9-.3.3 0 .6.1.8.3.2.2.4.5.5.9.1.3.1.7.1 1 0 .3-.1.6-.2.9l-.5 1.1c-.3.6-.8 1.1-1.2 1.5-.5.4-1 .6-1.4.6-.3 0-.5-.1-.7-.2-.4-.2-.7-.6-.9-1.1-.2-.5-.3-1.2-.3-2 .1-1.2.5-2.5 1.2-3.6.7-1.1 1.5-1.9 2.4-2.3.5-.2.9-.3 1.4-.3h.1c.7 0 1.4.3 1.9.9.6.6.9 1.5.9 2.4 0 1.5-1.3 3.5-2.6 4.6-.7.6-1.5.9-2.2.9-.2 0-.4 0-.6-.1-.5-.1-.9-.5-1.2-.9-.3-.5-.5-1.1-.5-1.9 0-1.3.5-2.6 1.2-3.6.7-1 1.5-1.8 2.2-2.2.4-.2.9-.3 1.3-.3.7 0 1.3.3 1.8.9.5.6.7 1.5.5 2.5l-.1.3c0 .1-.1.1-.1.2z"/>
                </svg>
                <span>App Store</span>
              </Button>
              <Button className="pill-button bg-neutral-900 hover:bg-neutral-800 text-white py-7 px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z"/>
                  <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z"/>
                </svg>
                <span>Google Play</span>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6 opacity-80">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center text-white text-xs border-2 border-white">
                      {i}
                    </div>
                  ))}
                </div>
                <span className="ml-2 text-sm text-neutral-600">10K+ активни отбора</span>
              </div>

              <div className="hidden md:flex items-center">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-neutral-600">4.9/5 рейтинг</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-72 md:w-80 h-auto floating">
              <div className="absolute inset-16 -z-10 rounded-full bg-secondary/30 blur-3xl transform rotate-45"></div>
              <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-white/90 shadow-2xl relative z-10 transform">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20 mix-blend-overlay z-10 pointer-events-none"></div>
                <img
                  src="/placeholder.svg"
                  alt="SureGo App Screenshot"
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating elements around the phone */}
              <div className="absolute -top-6 -left-10 glass-card rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">14 потвърдени</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-8 glass-card rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">350лв събрани</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="white" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,69.3C384,64,480,96,576,128C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
