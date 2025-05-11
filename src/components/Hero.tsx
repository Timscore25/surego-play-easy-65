
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-b from-dbeafe to-white overflow-hidden">
      <div className="app-container">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Забрави хаоса – организирай мачове с приятели лесно!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Управлявай събития, играчи и плащания – директно от телефона си.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white py-6 px-8 rounded-xl flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 13.8l.5-1c.6-1 .3-2.2-.3-3.1-.5-.8-1.6-1.7-3-1.7h-.1c-.6 0-1.2.2-1.9.5-1.1.5-2.1 1.4-3 2.7-.8 1.3-1.4 2.8-1.5 4.4 0 1.1.2 2 .6 2.8.4.7 1.1 1.3 1.9 1.6.4.1.7.2 1.1.2.9 0 1.7-.5 2.6-1.3.9-.8 1.8-1.9 2.5-3 .7-1 1-2 1-2.8 0-.4-.1-.7-.2-1-.1.1-.1.1-.2.2-.3.4-.5.7-.5 1.1 0 .2.1.4.2.5 0 .1.1.2.1.3 0 .3-.1.7-.5 1.1-.5.5-1.4 1-2.1 1h-.2c-.3 0-.5-.1-.7-.2-.3-.2-.4-.5-.4-1 0-.4.1-.9.3-1.3.2-.4.5-.7.8-1 .3-.2.6-.3.9-.3.3 0 .6.1.8.3.2.2.4.5.5.9.1.3.1.7.1 1 0 .3-.1.6-.2.9l-.5 1.1c-.3.6-.8 1.1-1.2 1.5-.5.4-1 .6-1.4.6-.3 0-.5-.1-.7-.2-.4-.2-.7-.6-.9-1.1-.2-.5-.3-1.2-.3-2 .1-1.2.5-2.5 1.2-3.6.7-1.1 1.5-1.9 2.4-2.3.5-.2.9-.3 1.4-.3h.1c.7 0 1.4.3 1.9.9.6.6.9 1.5.9 2.4 0 1.5-1.3 3.5-2.6 4.6-.7.6-1.5.9-2.2.9-.2 0-.4 0-.6-.1-.5-.1-.9-.5-1.2-.9-.3-.5-.5-1.1-.5-1.9 0-1.3.5-2.6 1.2-3.6.7-1 1.5-1.8 2.2-2.2.4-.2.9-.3 1.3-.3.7 0 1.3.3 1.8.9.5.6.7 1.5.5 2.5l-.1.3c0 .1-.1.1-.1.2z"/>
                </svg>
                <span>App Store</span>
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white py-6 px-8 rounded-xl flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z"/>
                  <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z"/>
                </svg>
                <span>Google Play</span>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-64 md:w-72 h-auto animate-float">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/40 rounded-[2.5rem] transform rotate-6"></div>
              <div className="relative z-10 bg-white border-8 border-gray-100 rounded-[2.5rem] shadow-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="SureGo App Screenshot"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
