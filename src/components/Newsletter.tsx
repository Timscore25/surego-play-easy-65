
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Успешен абонамент!",
          description: "Благодарим ви, че се абонирахте за нашия бюлетин.",
        });
        
        setEmail("");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(100,100,255,0.1),rgba(255,255,255,1)_70%)]"></div>
      </div>
      
      <div className="app-container">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div>
                  <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">
                    Бюлетин
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Абонирай се за новини и бъдещи функции</h2>
                  <p className="text-white/80 mb-6">
                    Бъдете първите, които научават за нови функции, събития и съвети за организиране на мачове.
                  </p>
                
                  <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="Вашият имейл"
                        className="w-full bg-white/90 backdrop-blur-sm border-0 placeholder:text-neutral-500 py-6 pl-5 pr-36 rounded-xl focus-visible:ring-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button 
                        type="submit" 
                        className="absolute right-1.5 top-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Изпращане</span>
                          </div>
                        ) : (
                          <span>Абонирай се</span>
                        )}
                      </Button>
                    </div>
                    <p className="text-white/60 text-sm">
                      Никога няма да споделяме вашия имейл. Можете да се отпишете по всяко време.
                    </p>
                  </form>
                </div>
                
                <div className="hidden md:block">
                  <div className="relative">
                    <div className="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <div className="absolute top-0 right-0 bg-white rounded-lg px-4 py-2 shadow-lg transform translate-x-1/3 -translate-y-1/3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium">Излезе версия 2025.1</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 bg-white rounded-lg px-4 py-2 shadow-lg transform -translate-x-1/3 translate-y-1/3">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium">Седмични новини и съвети</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
