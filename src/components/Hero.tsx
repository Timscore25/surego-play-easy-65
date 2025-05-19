
import { Button } from "@/components/ui/button";

const Hero = () => {
  return <section id="hero" className="pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12 lg:pb-16 bg-gradient-to-b from-dbeafe to-white overflow-hidden bg-[#11e7ef]">
      <div className="app-container">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-8 px-4 md:px-0">
          {/* Hero Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in mt-8 lg:mt-0" style={{
          animationDelay: '0.2s'
        }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">Кажи сбогом на хаоса при футболните срещи!</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">
              Управлявай събития, играчи и плащания – директно от телефона си.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <a href="#" className="inline-block no-underline">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-14 w-auto" />
              </a>
              <a href="#" className="inline-block no-underline">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14 w-auto" />
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 lg:w-[28rem] h-auto animate-float">
              <div className="absolute inset-0 scale-80 bg-gradient-to-b from-[#ffc100] to-[#ffc100] rounded-[2.5rem] transform rotate-6"></div>
              <img 
                alt="SureGo App Screenshot" 
                className="relative z-10 w-full h-auto rounded-[2.5rem]" 
                src="/lovable-uploads/d35149cf-ad77-43fb-a4b1-db00ec745eda.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
