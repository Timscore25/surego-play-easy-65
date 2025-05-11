
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary text-white">
      <div className="app-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Доказани резултати</h2>
          <p className="text-lg text-white/80">
            Хиляди организатори и футболисти вече разчитат на SureGo
          </p>
        </div>

        <div className="flex flex-col gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-8 w-auto text-warmyellow-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic mb-6 flex-grow">
                  "Най-сетне спряха оправданията – всеки знае кога и къде сме!"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-14 h-14 rounded-full bg-warmyellow-400 text-primary flex items-center justify-center text-xl font-bold">
                    К
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Калоян</h4>
                    <p className="text-sm opacity-75">организатор на мачове в София</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-warmyellow-400">10,000+</div>
                <p className="text-center text-white/80">организирани събития</p>
              </div>
              <div className="w-full md:w-px h-px md:h-auto bg-white/20 my-6 md:my-0"></div>
              <div className="flex flex-col items-center justify-center md:w-1/2">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-warmyellow-400">2,000+</div>
                <p className="text-center text-white/80">активни отбора</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
