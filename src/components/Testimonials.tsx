import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
const Testimonials = () => {
  return <section id="testimonials" className="section-padding text-white bg-[#0583bb]">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Доказани резултати</h2>
          <p className="text-lg text-white/80">
            Хиляди организатори и футболисти вече разчитат на SureGo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-6 w-auto text-warmyellow-400" fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-6 flex-grow text-white">
                  "Най-сетне спряха оправданията – всеки знае кога и къде сме!"
                </p>
                <div className="flex items-center mt-auto">
                  <Avatar className="w-14 h-14 bg-warmyellow-400 text-primary">
                    <AvatarFallback className="font-bold text-xl">К</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Калоян</h4>
                    <p className="text-sm text-white/80">организатор на мачове в София</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-6 w-auto text-warmyellow-400" fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-6 flex-grow text-white">
                  "С SureGo организирането на мачове стана лесно! Вече нямаме проблеми с комуникацията."
                </p>
                <div className="flex items-center mt-auto">
                  <Avatar className="w-14 h-14 bg-warmyellow-400 text-primary">
                    <AvatarFallback className="font-bold text-xl">М</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Мартин</h4>
                    <p className="text-sm text-white/80">капитан на отбор във Варна</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg animate-fade-in md:col-span-2" style={{
          animationDelay: '0.6s'
        }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-warmyellow-400">10,000+</div>
                <p className="text-center text-white">организирани събития</p>
              </div>
              <div className="w-full md:w-px h-px md:h-auto bg-white/20 my-6 md:my-0"></div>
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-warmyellow-400">2,000+</div>
                <p className="text-center text-white">активни отбора</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;