
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Instructions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Ensure proper spacing from fixed header */}
      <div className="pt-16 md:pt-20">
        {/* Wave SVG */}
        <div className="relative w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 md:h-24 bg-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#11e7ef"></path>
          </svg>
        </div>

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('instructionsTitle')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('instructionsSubtitle')}
            </p>
          </div>

          {/* Instructions Content */}
          <div className="space-y-12">
            {/* Download Section */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                {t('downloadTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('downloadDesc')}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <img src="/lovable-uploads/b20c0027-a11f-4e38-bcfc-3908e8d244d0.png" alt="App Store" className="h-8" />
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <img src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" alt="Google Play" className="h-8" />
                </a>
              </div>
            </section>

            {/* Setup Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                {t('setupTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('setupDesc')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('setupStep1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('setupStep2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('setupStep3')}
                </li>
              </ul>
            </section>

            {/* Create Team Section */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                {t('createTeamTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('createTeamDesc')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('createTeamStep1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('createTeamStep2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('createTeamStep3')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('createTeamStep4')}
                </li>
              </ul>
            </section>

            {/* Invite Players Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                {t('invitePlayersTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('invitePlayersDesc')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('inviteMethod1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('inviteMethod2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('inviteMethod3')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('inviteMethod4')}
                </li>
              </ul>
            </section>

            {/* Organize Event Section */}
            <section className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                {t('organizeEventTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('organizeEventDesc')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('organizeStep1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('organizeStep2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('organizeStep3')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('organizeStep4')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('organizeStep5')}
                </li>
              </ul>
            </section>

            {/* Management Section */}
            <section className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-[#12e8f0] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">6</span>
                {t('manageTitle')}
              </h2>
              <p className="text-gray-700 mb-4">{t('manageDesc')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('manageStep1')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('manageStep2')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('manageStep3')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#12e8f0] rounded-full mr-3"></span>
                  {t('manageStep4')}
                </li>
              </ul>
            </section>

            {/* Support Section */}
            <section className="bg-[#12e8f0] text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">{t('supportTitle')}</h2>
              <p className="mb-4">{t('supportDesc')}</p>
              <div className="space-y-2">
                <p className="font-semibold">{t('supportEmail')}</p>
                <p className="text-sm opacity-90">{t('supportResponse')}</p>
              </div>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Instructions;
