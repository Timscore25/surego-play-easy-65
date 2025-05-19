
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define our translations
export const translations = {
  bg: {
    // Header
    features: "Функции",
    howItWorks: "Как работи",
    testimonials: "Отзиви",
    faq: "FAQ",
    
    // Hero
    heroTitle: "Кажи сбогом на хаоса при футболните срещи!",
    heroSubtitle: "Управлявай събития, играчи и плащания – директно от телефона си.",
    
    // Newsletter
    newsletterTitle: "Абонирай се за новини и функции",
    newsletterSubtitle: "Бъдете първите, които научават за нови функции, събития и съвети за организиране на мачове.",
    newsletterPlaceholder: "Вашият имейл",
    newsletterButton: "Абонирай се",
    newsletterDisclaimer: "Никога няма да споделяме вашия имейл. Можете да се отпишете по всяко време.",
    
    // Footer
    home: "Начало",
    support: "Поддръжка",
    help: "Помощ",
    contact: "Контакт",
    legal: "Правни",
    terms: "Условия за ползване",
    privacy: "Политика за поверителност",
    language: "Език",
    allRightsReserved: "Всички права запазени.",
  },
  en: {
    // Header
    features: "Features",
    howItWorks: "How It Works",
    testimonials: "Testimonials",
    faq: "FAQ",
    
    // Hero
    heroTitle: "Say goodbye to chaos in football meetings!",
    heroSubtitle: "Manage events, players and payments - directly from your phone.",
    
    // Newsletter
    newsletterTitle: "Subscribe for news and features",
    newsletterSubtitle: "Be the first to learn about new features, events and tips for organizing matches.",
    newsletterPlaceholder: "Your email",
    newsletterButton: "Subscribe",
    newsletterDisclaimer: "We will never share your email. You can unsubscribe at any time.",
    
    // Footer
    home: "Home",
    support: "Support",
    help: "Help",
    contact: "Contact",
    legal: "Legal",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    language: "Language",
    allRightsReserved: "All rights reserved.",
  }
};

export type Language = "bg" | "en";
type TranslationKeys = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKeys) => string;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("bg");

  const t = (key: TranslationKeys): string => {
    return translations[language]?.[key] || translations.bg[key];
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
