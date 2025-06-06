
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t, changeLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/instructions') {
      // If on instructions page, navigate to main page and then scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on main page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 backdrop-blur-sm z-50 transition-all duration-300 py-3 md:py-4 
      ${isScrolled ? 'shadow-md bg-[#12e8f0]/90' : 'bg-[#12e8f0]'}`}>
      <div className="app-container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/c6d1b5c6-a420-4e52-a13b-d0c5fa555d33.png" alt="SureGo Whistle Logo" className="h-5 sm:h-6 mr-2" />
            <span className="text-xl sm:text-2xl font-bold" style={{
              color: "#ffc100"
            }}>SureGo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <button 
            onClick={() => handleSectionNavigation('features')} 
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            {t('features')}
          </button>
          <button 
            onClick={() => handleSectionNavigation('how-it-works')} 
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            {t('howItWorks')}
          </button>
          <button 
            onClick={() => handleSectionNavigation('testimonials')} 
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            {t('testimonials')}
          </button>
          <button 
            onClick={() => handleSectionNavigation('faq')} 
            className="text-gray-600 hover:text-primary transition-colors font-medium"
          >
            {t('faq')}
          </button>
          <Link to="/instructions" className="text-gray-600 hover:text-primary transition-colors font-medium">
            Инструкции
          </Link>
          <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
            <button 
              className={`p-2 rounded-full transition-colors ${language === "bg" ? "bg-gray-100" : "hover:bg-gray-100"}`} 
              aria-label="Български език"
              onClick={() => changeLanguage("bg")}
            >
              🇧🇬
            </button>
            <button 
              className={`p-2 rounded-full transition-colors ${language === "en" ? "bg-gray-100" : "hover:bg-gray-100"}`}
              aria-label="English"
              onClick={() => changeLanguage("en")}
            >
              🇬🇧
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-gray-500 hover:text-primary hover:bg-gray-100" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} color="#ffc100" /> : <Menu size={24} color="#ffc100" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <button 
              onClick={() => handleSectionNavigation('features')} 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium text-left"
            >
              {t('features')}
            </button>
            <button 
              onClick={() => handleSectionNavigation('how-it-works')} 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium text-left"
            >
              {t('howItWorks')}
            </button>
            <button 
              onClick={() => handleSectionNavigation('testimonials')} 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium text-left"
            >
              {t('testimonials')}
            </button>
            <button 
              onClick={() => handleSectionNavigation('faq')} 
              className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium text-left"
            >
              {t('faq')}
            </button>
            <Link to="/instructions" className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium" onClick={toggleMenu}>
              Инструкции
            </Link>
            <div className="flex items-center space-x-2 border-t pt-3 mt-1">
              <button 
                className={`p-2 rounded-full transition-colors ${language === "bg" ? "bg-gray-100" : "hover:bg-gray-100"}`} 
                aria-label="Български език"
                onClick={() => changeLanguage("bg")}
              >
                🇧🇬
              </button>
              <button 
                className={`p-2 rounded-full transition-colors ${language === "en" ? "bg-gray-100" : "hover:bg-gray-100"}`}
                aria-label="English"
                onClick={() => changeLanguage("en")}
              >
                🇬🇧
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
