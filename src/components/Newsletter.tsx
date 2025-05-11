
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

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
    <section className="section-padding bg-white">
      <div className="app-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Абонирай се за новини и функции</h2>
          <p className="text-lg text-gray-600 mb-8">
            Бъдете първите, които научават за нови функции, събития и съвети за организиране на мачове.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Вашият имейл"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Абонирай се
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
