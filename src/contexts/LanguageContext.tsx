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

    // Features
    featuresTitle: "Функции, които правят разликата",
    featuresSubtitle: "SureGo съдържа всичко, от което се нуждаете за безпроблемна организация на футболни събития",
    feature1Title: "Създаване на мачове и тренировки",
    feature1Desc: "Бързо планиране и управление на футболни събития с всички необходими детайли.",
    feature2Title: "Управление на играчи с роли и позиции",
    feature2Desc: "Организирайте играчите по позиции, умения и специални роли в отбора.",
    feature3Title: "Автоматични покани и известия",
    feature3Desc: "Автоматично изпращане на покани и напомняния към играчите за предстоящи мачове.",
    feature4Title: "Балансиране на отбори",
    feature4Desc: "Интелигентно разпределение на играчи за балансирани и конкурентни отбори.",
    feature5Title: "Проследяване на каса и плащания",
    feature5Desc: "Лесно проследяване на внесените суми и общия баланс на отбора.",
    feature6Title: "Игрова статистика и история",
    feature6Desc: "Преглед на статистики за мачове, посещаемост и представяне на отбора.",

    // How It Works
    howItWorksTitle: "Как работи SureGo?",
    howItWorksSubtitle: "Само шест лесни стъпки ви делят от перфектно организираните футболни събития",
    step1Title: "Свали приложението",
    step1Desc: "Изтеглете SureGo от App Store или Google Play безплатно.",
    step2Title: "Създай профил",
    step2Desc: "Бързо регистриране с Google, Apple ID или имейл.",
    step3Title: "Направи отбор",
    step3Desc: "Създайте своя отбор и настройте основните му параметри.",
    step4Title: "Добави играчи",
    step4Desc: "Поканете играчи с телефон или SureGo ID към вашия отбор.",
    step5Title: "Организирай събитие",
    step5Desc: "Задайте дата, час, локация и условия за участие.",
    step6Title: "Следи потвърждения и плащания",
    step6Desc: "Наблюдавайте кой е потвърдил и платил за участие.",

    // Registration
    registrationTitle: "Създаване на профил",
    regStep1Title: "Изтеглете приложението",
    regStep1Desc: "Достъпно в App Store и Google Play",
    regStep2Title: "Изберете начин за регистрация",
    regStep2Desc: "Няколко лесни начина за създаване на профил",
    regStep3Title: "Регистрация с имейл",
    regStep3Desc: "Въведете вашите данни за бърза регистрация",
    regStep4Title: "Активирайте профила си",
    regStep4Desc: "Потвърдете и започнете да използвате приложението",

    // App Showcase
    appShowcaseTitle: "Вижте приложението в действие",
    screenshot1Title: "Създай Отбор",
    screenshot2Title: "Покани Играчи",
    screenshot3Title: "Разпредели Играчите",
    screenshot4Title: "Организирай и Играй!",

    // Testimonials
    testimonialsTitle: "Доказани резултати",
    testimonialsSubtitle: "Хиляди организатори и футболисти вече разчитат на SureGo",
    testimonial1: "\"Най-сетне спряха оправданията – всеки знае кога и къде сме!\"",
    testimonial1Author: "Калоян",
    testimonial1Position: "организатор на мачове в София",
    testimonial2: "\"С SureGo организирането на мачове стана лесно! Вече нямаме проблеми с комуникацията.\"",
    testimonial2Author: "Мартин",
    testimonial2Position: "капитан на отбор във Варна",
    eventsOrganized: "организирани събития",
    activeTeams: "активни отбора",

    // FAQ
    faqTitle: "Често задавани въпроси",
    faqSubtitle: "Отговори на най-често задаваните въпроси за използването на SureGo",
    faq1Question: "Как се добавят играчи?",
    faq1Answer: "Можете да добавяте играчи по няколко начина: чрез изпращане на покана по имейл или телефон, споделяне на код за присъединяване или търсене по SureGo ID. След като играч приеме поканата, той автоматично се добавя към вашия отбор.",
    faq2Question: "Мога ли да променям състави?",
    faq2Answer: "Да, можете лесно да променяте съставите по всяко време. Просто отидете в секцията за управление на събития, изберете мача и преместете играчите между отборите. Системата също предлага автоматично балансиране на отборите според зададените умения на играчите.",
    faq3Question: "Как се следят плащанията?",
    faq3Answer: "SureGo предлага вградена система за проследяване на плащания. Можете да маркирате кой е платил, да изпращате напомняния за неплатени такси и да преглеждате общия баланс на отбора. Играчите получават автоматични известия за дължими суми и могат да маркират плащанията си през приложението.",
    faq4Question: "Работи ли за турнири?",
    faq4Answer: "Да, SureGo поддържа организиране на турнири с множество отбори. Можете да създадете турнирна структура, да следите резултати, да генерирате автоматично графици и да управлявате класирания. Функционалността за турнири е налична в разширения план на приложението.",

    // Call to Action
    ctaTitle: "Готов ли си да играеш без главоболия?",
    ctaSubtitle: "Свали SureGo сега и започни да организираш футболни събития лесно и бързо.",
    downloadApp: "Свали SureGo",
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

    // Features
    featuresTitle: "Features That Make a Difference",
    featuresSubtitle: "SureGo contains everything you need for hassle-free organization of football events",
    feature1Title: "Create Matches and Training Sessions",
    feature1Desc: "Quickly plan and manage football events with all necessary details.",
    feature2Title: "Manage Players with Roles and Positions",
    feature2Desc: "Organize players by positions, skills and special team roles.",
    feature3Title: "Automatic Invites and Notifications",
    feature3Desc: "Automatically send invitations and reminders to players for upcoming matches.",
    feature4Title: "Team Balancing",
    feature4Desc: "Intelligent distribution of players for balanced and competitive teams.",
    feature5Title: "Track Funds and Payments",
    feature5Desc: "Easily track payments and the overall team balance.",
    feature6Title: "Game Statistics and History",
    feature6Desc: "Review statistics for matches, attendance and team performance.",

    // How It Works
    howItWorksTitle: "How Does SureGo Work?",
    howItWorksSubtitle: "Only six easy steps separate you from perfectly organized football events",
    step1Title: "Download the App",
    step1Desc: "Download SureGo from the App Store or Google Play for free.",
    step2Title: "Create an Account",
    step2Desc: "Quick registration with Google, Apple ID or email.",
    step3Title: "Create a Team",
    step3Desc: "Create your team and set up its basic parameters.",
    step4Title: "Add Players",
    step4Desc: "Invite players by phone or SureGo ID to your team.",
    step5Title: "Organize an Event",
    step5Desc: "Set date, time, location and participation conditions.",
    step6Title: "Track Confirmations and Payments",
    step6Desc: "Monitor who has confirmed and paid for participation.",

    // Registration
    registrationTitle: "Account Creation",
    regStep1Title: "Download the App",
    regStep1Desc: "Available on App Store and Google Play",
    regStep2Title: "Choose Registration Method",
    regStep2Desc: "Multiple easy ways to create an account",
    regStep3Title: "Register with Email",
    regStep3Desc: "Enter your details for quick registration",
    regStep4Title: "Activate Your Account",
    regStep4Desc: "Confirm and start using the application",

    // App Showcase
    appShowcaseTitle: "See the App in Action",
    screenshot1Title: "Create Team",
    screenshot2Title: "Invite Players",
    screenshot3Title: "Assign Players",
    screenshot4Title: "Organize and Play!",

    // Testimonials
    testimonialsTitle: "Proven Results",
    testimonialsSubtitle: "Thousands of organizers and football players already rely on SureGo",
    testimonial1: "\"Finally, the excuses stopped – everyone knows when and where we are!\"",
    testimonial1Author: "Kaloyan",
    testimonial1Position: "match organizer in Sofia",
    testimonial2: "\"With SureGo, organizing matches became easy! We no longer have communication problems.\"",
    testimonial2Author: "Martin",
    testimonial2Position: "team captain in Varna",
    eventsOrganized: "events organized",
    activeTeams: "active teams",

    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers to the most commonly asked questions about using SureGo",
    faq1Question: "How do I add players?",
    faq1Answer: "You can add players in several ways: by sending an invitation by email or phone, sharing a join code, or searching by SureGo ID. Once a player accepts the invitation, they are automatically added to your team.",
    faq2Question: "Can I change team lineups?",
    faq2Answer: "Yes, you can easily change lineups at any time. Simply go to the event management section, select the match and move players between teams. The system also offers automatic team balancing based on the players' set skills.",
    faq3Question: "How are payments tracked?",
    faq3Answer: "SureGo offers a built-in payment tracking system. You can mark who has paid, send reminders for unpaid fees, and review the overall team balance. Players receive automatic notifications for amounts due and can mark their payments through the app.",
    faq4Question: "Does it work for tournaments?",
    faq4Answer: "Yes, SureGo supports organizing tournaments with multiple teams. You can create a tournament structure, track results, automatically generate schedules, and manage rankings. The tournament functionality is available in the extended plan of the application.",

    // Call to Action
    ctaTitle: "Ready to play without headaches?",
    ctaSubtitle: "Download SureGo now and start organizing football events easily and quickly.",
    downloadApp: "Download SureGo",
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
