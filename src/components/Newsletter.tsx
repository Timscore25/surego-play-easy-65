
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally submit to an API
    if (email) {
      toast({
        title: "Успешен абонамент!",
        description: "Благодарим ви, че се абонирахте за нашия бюлетин.",
      });
      
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-sky-50">
      <div className="app-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-blue-50">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Абонирай се за новини и функции</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Бъдете първите, които научават за нови функции, събития и съвети за организиране на мачове.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-100 animate-fade-in">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Вашият имейл"
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 shadow-md transition-all hover:shadow-lg"
              >
                Абонирай се
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              Никога няма да споделяме вашия имейл. Можете да се отпишете по всяко време.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
