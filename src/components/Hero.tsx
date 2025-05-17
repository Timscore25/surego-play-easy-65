import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11e7ef] to-white pointer-events-none z-0">
        {/* Wave shape */}
        <svg
          className="absolute bottom-0 w-full transform translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#11e7ef"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,224C1248,256,1344,256,1392,256L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Hero Content */}
      <div className="app-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-950">
              Организирай Футболни Мачове Лесно и Бързо
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Създай или се присъедини към футболни събития близо до теб. SureGo улеснява намирането на партньори и организирането на мачове.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-[#ffc100] text-gray-950 hover:bg-warmyellow-500">
                Научи повече
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Виж как работи
              </Button>
            </div>
          </div>

          {/* Right side: Hero Image */}
          <div className="hidden md:block">
            <img
              src="/lovable-uploads/c6d1b5c6-a420-4e52-a13b-d0c5fa555d33.png"
              alt="Hero Image"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0">
        {/* Yellow circle */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#ffc100] bg-opacity-30"></div>
        
        {/* Floating football */}
        <img 
          src="/lovable-uploads/c6d1b5c6-a420-4e52-a13b-d0c5fa555d33.png" 
          alt="Football" 
          className="absolute bottom-10 right-10 w-20 h-20 md:w-32 md:h-32 animate-float"
        />
      </div>
    </section>
  );
};

export default Hero;
