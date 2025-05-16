
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="app-container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              SureGo
            </span>
            <span className="ml-1 bg-primary text-white text-xs px-2 py-0.5 rounded-full">AI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a 
            href="#features" 
            className={`transition-colors hover:text-primary font-medium ${
              isScrolled ? "text-neutral-700" : "text-white"
            }`}
          >
            Функции
          </a>
          <a 
            href="#how-it-works" 
            className={`transition-colors hover:text-primary font-medium ${
              isScrolled ? "text-neutral-700" : "text-white"
            }`}
          >
            Как работи
          </a>
          <div className="relative group">
            <button 
              className={`flex items-center transition-colors hover:text-primary font-medium ${
                isScrolled ? "text-neutral-700" : "text-white"
              }`}
            >
              <span>Ресурси</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-200 z-20">
              <div className="bg-white rounded-xl shadow-xl border border-neutral-100 w-48 overflow-hidden">
                <a href="#testimonials" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Отзиви</a>
                <a href="#faq" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">FAQ</a>
                <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Блог</a>
                <a href="#" className="block px-4 py-2 hover:bg-neutral-50 text-neutral-700">Документация</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 border-l pl-6 border-gray-200">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Български език">
              🇧🇬
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="English">
              🇬🇧
            </button>
          </div>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Button className={`rounded-full px-6 ${
            isScrolled 
              ? "bg-primary hover:bg-primary/90 text-white" 
              : "bg-white hover:bg-white/90 text-primary"
          }`}>
            Свали приложението
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? "text-neutral-700" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-neutral-700" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 px-4 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col space-y-6 mb-8">
                <a 
                  href="#features" 
                  className="text-neutral-700 hover:text-primary transition-colors py-2 font-medium"
                  onClick={toggleMenu}
                >
                  Функции
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-neutral-700 hover:text-primary transition-colors py-2 font-medium"
                  onClick={toggleMenu}
                >
                  Как работи
                </a>
                
                <div className="space-y-2">
                  <p className="text-neutral-500 text-sm font-medium">Ресурси</p>
                  <div className="space-y-3 pl-2">
                    <a 
                      href="#testimonials" 
                      className="block text-neutral-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      Отзиви
                    </a>
                    <a 
                      href="#faq" 
                      className="block text-neutral-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      FAQ
                    </a>
                    <a 
                      href="#" 
                      className="block text-neutral-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      Блог
                    </a>
                    <a 
                      href="#" 
                      className="block text-neutral-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      Документация
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-2 border-t pt-4">
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Български език">
                    🇧🇬
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="English">
                    🇬🇧
                  </button>
                </div>
              </nav>

              <div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Свали приложението
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
