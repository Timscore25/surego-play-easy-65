
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

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
    <section className="section-padding bg-gradient-to-b from-[#11e7ef]/10 to-white px-4 md:px-6">
      <div className="app-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-full bg-[#11e7ef]/20">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-[#11e7ef]" />
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">
            {t('newsletterTitle')}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            {t('newsletterSubtitle')}
          </p>
          
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-100 animate-fade-in">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  type="email"
                  placeholder={t('newsletterPlaceholder')}
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors h-10 sm:h-auto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-[#ffc100] hover:bg-[#ffc100]/90 shadow-md transition-all hover:shadow-lg text-gray-900 whitespace-nowrap"
              >
                {t('newsletterButton')}
              </Button>
            </form>
            <p className="text-xs text-gray-400 mt-4">
              {t('newsletterDisclaimer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
