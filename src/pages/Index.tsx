
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RegistrationShowcase from "@/components/RegistrationShowcase";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Wave SVG before both showcase sections */}
        <div className="relative w-full overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 md:h-24 bg-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#11e7ef"></path>
          </svg>
        </div>
        
        <RegistrationShowcase />
        <AppShowcase />
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
