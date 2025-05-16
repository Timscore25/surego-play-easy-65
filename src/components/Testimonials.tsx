
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SureGo напълно промени организацията на нашите мачове. Вече не губим време с координация и всички са на време.",
      name: "Калоян Петров",
      role: "Организатор на мачове в София",
      avatar: "K",
      rating: 5,
    },
    {
      quote: "Най-добрата функция е автоматичното разделяне на отборите—винаги е балансирано и всички са доволни.",
      name: "Мартин Иванов",
      role: "Капитан на отбор във Варна",
      avatar: "M",
      rating: 5,
    },
    {
      quote: "Вградената система за плащания е невероятна. Никакви повече спорове кой колко трябва да плати.",
      name: "Георги Димитров",
      role: "Треньор на любителски отбор",
      avatar: "Г",
      rating: 5,
    }
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzBoLTYgdi02aDZ2NnptMzAgMGgtNiB2LTZoNnY2em0tNjAgMGgtNiB2LTZoNnY2em0zMCAxOGgtNnYtNmg2djZ6bTMwIDBoLTZ2LTZoNnY2em0tNjAgMGgtNnYtNmg2djZ6bTMwLTM2aC02di02aDZ2NnptMzAgMGgtNnYtNmg2djZ6bS02MCAwaC02di02aDZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Wave pattern top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto rotate-180">
          <path fill="white" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="app-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 text-white font-medium">
            Отзиви от клиенти
          </div>
          <h2 className="section-title text-white mb-4">Какво казват нашите потребители</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Хиляди организатори и футболисти вече разчитат на SureGo за организация на мачовете си
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300" fill="currentColor" />
                  ))}
                </div>
                
                <svg width="45" height="36" className="mb-6 text-white/20" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4 36C11.4667 36 9.6 35.4 7.8 34.2C6 33 4.53333 31.2667 3.4 29C2.26667 26.7333 1.7 24.2 1.7 21.4C1.7 17.8 2.33333 14.4667 3.6 11.4C4.86667 8.33333 6.66667 5.66667 9 3.4C11.3333 1.13333 14.0667 0 17.2 0C19.4 0 21.2667 0.6 22.8 1.8C24.3333 3 25.1 4.53333 25.1 6.4C25.1 8.53333 24.2 10.3333 22.4 11.8C20.6 13.2667 18.6667 14 16.6 14C15.8 14 15 13.8667 14.2 13.6C13.4 13.3333 12.6667 12.8667 12 12.2C12.2667 15.6667 13.6667 18.6 16.2 21C18.7333 23.4 21.4667 24.6 24.4 24.6C26.4 24.6 28.4667 24 30.6 22.8L32 27.6C30.8 30.1333 28.8 32.0667 26 33.4C23.2 34.7333 19.9333 35.4667 16.2 35.6C15.2667 35.8667 14.3333 35.9333 13.4 35.8V36ZM37.9 36C35.9667 36 34.1 35.4 32.3 34.2C30.5 33 29.0333 31.2667 27.9 29C26.7667 26.7333 26.2 24.2 26.2 21.4C26.2 17.8 26.8333 14.4667 28.1 11.4C29.3667 8.33333 31.1667 5.66667 33.5 3.4C35.8333 1.13333 38.5667 0 41.7 0C43.9 0 45.7667 0.6 47.3 1.8C48.8333 3 49.6 4.53333 49.6 6.4C49.6 8.53333 48.7 10.3333 46.9 11.8C45.1 13.2667 43.1667 14 41.1 14C40.3 14 39.5 13.8667 38.7 13.6C37.9 13.3333 37.1667 12.8667 36.5 12.2C36.7667 15.6667 38.1667 18.6 40.7 21C43.2333 23.4 45.9667 24.6 48.9 24.6C50.9 24.6 52.9667 24 55.1 22.8L56.5 27.6C55.3 30.1333 53.3 32.0667 50.5 33.4C47.7 34.7333 44.4333 35.4667 40.7 35.6C39.7667 35.8667 38.8333 35.9333 37.9 35.8V36Z" />
                </svg>
                
                <p className="text-xl text-white mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 bg-white/20 text-white">
                    <div className="font-bold text-lg">{testimonial.avatar}</div>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-around items-center">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">10,000+</div>
              <p className="text-white/80">организирани събития</p>
            </motion.div>
            
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">2,000+</div>
              <p className="text-white/80">активни отбора</p>
            </motion.div>
            
            <div className="hidden md:block w-px h-16 bg-white/20"></div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 text-white">4.9</div>
              <p className="text-white/80">рейтинг в App Store</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
              <span>Вижте всички отзиви</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Wave pattern bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 w-full h-auto">
          <path fill="white" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
