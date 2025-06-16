import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  
  // Define the app showcase screenshots with the new uploaded images
  const appScreenshots = [
    "/lovable-uploads/fa3132b2-5680-47ac-9f2b-be94598d7e07.png", // Създай Отбор (Create Team) - Main screen
    "/lovable-uploads/09b7e742-50d5-424c-b530-a1c695583c60.png", // Покани Играчи (Invite Players) - Main screen duplicate
    "/lovable-uploads/3c86f45e-cfce-40bf-a734-6e6ecb6a15cd.png", // Разпредели Играчите (Assign Players) - Payments screen
    "/lovable-uploads/a759d7c0-6184-4c2c-9afb-e281b42b5fb0.png", // Организирай и Играй! (Organize and Play) - Team formation screen
  ];

  useEffect(() => {
    // Handle scrolling to section when navigating from instructions page
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure page is rendered

      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Wave SVG before the app showcase section */}
        <div className="relative w-full overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 md:h-24 bg-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#11e7ef"></path>
          </svg>
        </div>
        
        <AppShowcase screenshots={appScreenshots} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Newsletter />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
