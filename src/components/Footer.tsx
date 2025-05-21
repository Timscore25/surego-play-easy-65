
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, language, changeLanguage } = useLanguage();
  
  return (
    <footer className="bg-gray-100 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="app-container px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-center">
              <div className="flex items-center w-full justify-center">
                <img 
                  src="/lovable-uploads/c6d1b5c6-a420-4e52-a13b-d0c5fa555d33.png" 
                  alt="SureGo Whistle Logo" 
                  className="h-4 md:h-5 mr-2"
                />
                <span className="flex items-center" style={{ color: "#fec000" }}>SureGo</span>
              </div>
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-center">
              <li><Link to="/" className="text-gray-600 hover:text-surego-600">{t('home')}</Link></li>
              <li><a href="#features" className="text-gray-600 hover:text-surego-600">{t('features')}</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-surego-600">{t('howItWorks')}</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-surego-600">{t('testimonials')}</a></li>
              <li><Link to="/instructions" className="text-gray-600 hover:text-surego-600">Инструкции</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-center">{t('support')}</h3>
            <ul className="space-y-2 text-sm md:text-base text-center">
              <li><a href="#faq" className="text-gray-600 hover:text-surego-600">{t('faq')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-surego-600">{t('help')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-surego-600">{t('contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-center">{t('legal')}</h3>
            <ul className="space-y-2 text-sm md:text-base text-center">
              <li><a href="#" className="text-gray-600 hover:text-surego-600">{t('terms')}</a></li>
              <li><a href="#" className="text-gray-600 hover:text-surego-600">{t('privacy')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-center">{t('language')}</h3>
            <div className="flex items-center justify-center space-x-2">
              <button 
                className={`p-2 rounded-full transition-colors ${language === "bg" ? "bg-gray-200" : "hover:bg-gray-200"}`} 
                aria-label="Български език"
                onClick={() => changeLanguage("bg")}
              >
                🇧🇬
              </button>
              <button 
                className={`p-2 rounded-full transition-colors ${language === "en" ? "bg-gray-200" : "hover:bg-gray-200"}`}
                aria-label="English"
                onClick={() => changeLanguage("en")}
              >
                🇬🇧
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs md:text-sm text-gray-500">
              © {new Date().getFullYear()} SureGo. {t('allRightsReserved')}
            </p>
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="text-gray-500 hover:text-surego-600">
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-surego-600">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-surego-600">
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
