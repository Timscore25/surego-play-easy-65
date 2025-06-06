
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

const Instructions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main>
        {/* Wave SVG - positioned at the bottom of the header */}
        <div className="relative w-full h-16 md:h-24 overflow-hidden mt-16 md:mt-20 -mb-1 border-0 outline-0">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute top-0 left-0 w-full h-full border-0 outline-0"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#12e8f0"
            />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="bg-[#12e8f0] py-16 md:py-24">
          <div className="app-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {t('instructionsTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                {t('instructionsSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16 md:py-24">
          <div className="app-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('gettingStartedTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('gettingStartedDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('downloadTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('downloadDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('registerTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('registerDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('createTeamTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('createTeamDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('addPlayersTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('addPlayersDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('organizeEventTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('organizeEventDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Management Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="app-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('manageTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('manageDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('teamBalancingTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('teamBalancingDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('paymentTrackingTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('paymentTrackingDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('notificationsTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('notificationsDesc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('statisticsTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('statisticsDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Tips Section */}
        <section className="py-16 md:py-24">
          <div className="app-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('tipsTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('tipsDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('tip1Title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('tip1Desc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('tip2Title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('tip2Desc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('tip3Title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('tip3Desc')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {t('tip4Title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('tip4Desc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Support Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="app-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('supportTitle')}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('supportDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Mail className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {t('contactSupport')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{t('emailSupport')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <HelpCircle className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {t('faqLink')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('faqSubtitle')}</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <MessageCircle className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {t('communityLink')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{t('supportDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
