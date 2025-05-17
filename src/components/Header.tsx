
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="fixed w-full top-0 backdrop-blur-sm z-50 shadow-sm py-4 bg-[#11e7ef]">
      <div className="app-container flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src="/lovable-uploads/c6d1b5c6-a420-4e52-a13b-d0c5fa555d33.png" alt="SureGo Whistle Logo" className="h-6 mr-2" />
            <span className="text-2xl font-bold" style={{
            color: "#fec000"
          }}>SureGo</span>
            
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors font-medium">
            Функции
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">
            Как работи
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors font-medium">
            Отзиви
          </a>
          <a href="#faq" className="text-gray-600 hover:text-primary transition-colors font-medium">
            FAQ
          </a>
          <div className="flex items-center space-x-2 border-l pl-4 border-gray-200">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Български език">
              🇧🇬
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="English">
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
      {isMenuOpen && <div className="md:hidden bg-white py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium" onClick={toggleMenu}>
              Функции
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium" onClick={toggleMenu}>
              Как работи
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium" onClick={toggleMenu}>
              Отзиви
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors py-2 px-4 rounded-md hover:bg-gray-50 font-medium" onClick={toggleMenu}>
              FAQ
            </a>
            <div className="flex items-center space-x-2 border-t pt-4 mt-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Български език">
                🇧🇬
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="English">
                🇬🇧
              </button>
            </div>
          </nav>
        </div>}
    </header>;
};
export default Header;
