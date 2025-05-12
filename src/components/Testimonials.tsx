
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding blue-light-bg relative">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Доказани резултати</h2>
          <p className="text-lg text-gray-700">
            Хиляди организатори и футболисти вече разчитат на SureGo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-auto text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xl italic mb-6 flex-grow text-gray-800">
                  "Най-сетне спряха оправданията – всеки знае кога и къде сме!"
                </p>
                <div className="flex items-center mt-auto">
                  <Avatar className="w-14 h-14 bg-accent text-accent-foreground">
                    <AvatarFallback className="font-bold text-xl">К</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Калоян</h4>
                    <p className="text-sm text-gray-600">организатор на мачове в София</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-auto text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xl italic mb-6 flex-grow text-gray-800">
                  "С SureGo организирането на мачове стана лесно! Вече нямаме проблеми с комуникацията."
                </p>
                <div className="flex items-center mt-auto">
                  <Avatar className="w-14 h-14 bg-accent text-accent-foreground">
                    <AvatarFallback className="font-bold text-xl">М</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-800">Мартин</h4>
                    <p className="text-sm text-gray-600">капитан на отбор във Варна</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in md:col-span-2" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-accent">10,000+</div>
                <p className="text-center text-gray-700">организирани събития</p>
              </div>
              <div className="w-full md:w-px h-px md:h-auto bg-gray-200 my-6 md:my-0"></div>
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-accent">2,000+</div>
                <p className="text-center text-gray-700">активни отбора</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-[200%] h-20 md:h-24 lg:h-32 animate-wave"
          style={{ fill: '#7ca7c4' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
