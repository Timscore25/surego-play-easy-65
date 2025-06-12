
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Users, DollarSign, Shield, Zap, Settings, Eye, Clock, MapPin, Star } from "lucide-react";

const Instructions = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Wave SVG - positioned at the bottom of the header */}
        <div className="relative w-full h-16 md:h-24 overflow-hidden mt-16 md:mt-[4.5rem] border-0 outline-0">
          <svg 
            className="absolute top-0 left-0 w-full h-full border-0 outline-0"
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="#12e8f0"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 mt-8">{t('instructions')}</h1>
          
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Instruction 1 - Profile Creation - Horizontal Layout */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">1</span>
                      {t('instructionTitle1')}
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      
                      {/* Column 1: Download App */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionDownloadApp')}</h3>
                          <p className="text-gray-700">{t('instructionAvailableIn')}</p>
                          
                          {/* App Store and Google Play Badges */}
                          <div className="space-y-3 pt-4">
                            <a href="https://apps.apple.com/bg/app/surego/id1671429121" target="_blank" rel="noopener noreferrer" className="block">
                              <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                                alt="Download on the App Store" 
                                className="h-12 w-auto"
                              />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.intellicsengineering.surego2" target="_blank" rel="noopener noreferrer" className="block">
                              <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                                alt="Get it on Google Play" 
                                className="h-12 w-auto"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Column 2: Choose Registration Method */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionChooseRegistration')}</h3>
                          <p className="text-gray-700">{t('instructionCanRegisterWith')}</p>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                              <span className="text-sm">{t('instructionGoogleAccount')}</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                              <span className="text-sm">{t('instructionAppleId')}</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                              <span className="text-sm">{t('instructionEmailRegistration')}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/501f51f3-0232-4e24-a34b-1c67dca7c87f.png" 
                            alt="SureGo Registration Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 3: Email Registration Process */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionEmailRegTitle')}</h3>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionEnterEmail')}</span>
                            </div>
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionPressCreateProfile')}</span>
                            </div>
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionCheckEmail')}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/ca7b67e1-1774-474a-bab0-619adb140776.png" 
                            alt="SureGo Email Registration Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 4: Activate Profile */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionActivateProfile')}</h3>
                          <div className="space-y-2">
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionOpenEmail')}</span>
                            </div>
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionReturnToApp')}</span>
                            </div>
                            <div className="flex items-start">
                              <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                              <span>{t('instructionEnterCredentials')}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/243ab4bd-b874-4b78-a5c6-34df233a34a5.png" 
                            alt="SureGo Profile Activation Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md mt-8">
                      <p className="text-lg font-medium text-warmyellow-700 text-center">
                        {t('instructionProfileReady')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 2 - Team Creation - Horizontal Layout with Bottom-Aligned Images */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">2</span>
                      {t('instructionTitle2')}
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      
                      {/* Column 1: Open Teams */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionOpenSection')}</h3>
                          <div className="flex items-start">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">1</div>
                            <span className="text-sm">{t('instructionOpenTeamsSection')}</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Open Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 2: Press Plus */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionPressPlus')}</h3>
                          <div className="flex items-start">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">2</div>
                            <span className="text-sm">{t('instructionPressPlusButton')}</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Plus Button Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 3: Fill Information */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionFillData')}</h3>
                          <div className="flex items-start">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">3</div>
                            <span className="text-sm">{t('instructionFillTeamData')}</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Fill Data Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 4: Save */}
                      <div className="flex flex-col h-full">
                        <div className="flex-grow space-y-4">
                          <h3 className="font-bold text-xl text-warmyellow-500">{t('instructionSave')}</h3>
                          <div className="flex items-start">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">4</div>
                            <span className="text-sm">{t('instructionPressSave')}</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - At the bottom */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Save Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md mt-8">
                      <p className="text-lg font-medium text-warmyellow-700 text-center">
                        {t('instructionTeamReady')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 3 - Player Management */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">3</span>
                      {t('instructionTitle3')}
                    </h2>
                    <p className="text-white/90 text-lg">{t('instructionTeamSubtitle')}</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Access Players Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          1. {t('instructionAccessPlayers')}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionOpenTeams')}</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionSelectTeam')}</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionClickPlayers')}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/4f6a85b5-6b5f-48a5-8e9f-32b85f72760a.png" 
                          alt="Достъп до играчи" 
                          className="max-w-full h-auto rounded-lg max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 2: Adding New Player */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          2. {t('instructionAddNewPlayer')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionPressPlusButton')}</span>
                          </div>
                          <div className="ml-6">
                            <p className="font-medium mb-2">{t('instructionChooseMethod')}</p>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Users className="text-blue-500 mr-2 flex-shrink-0" size={16} />
                                <span>{t('instructionViaSureGoId')}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span>{t('instructionViaPhone')}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="text-purple-500 mr-2 flex-shrink-0" size={16} />
                                <span>{t('instructionViaContacts')}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/75e94b9e-02cc-4bb4-b7bf-40c1db665d4e.png" 
                          alt="Добавяне на играч" 
                          className="max-w-full h-auto rounded-lg max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 3: Player Configuration */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          3. {t('instructionPlayerConfig')}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* Role Configuration */}
                          <div className="bg-warmyellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-warmyellow-600">{t('instructionSetRole')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🏆</span>
                                <span className="font-medium">{t('instructionMainPlayer')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionMainPlayerDesc')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🔄</span>
                                <span className="font-medium">{t('instructionReservePlayer')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionReservePlayerDesc')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">👋</span>
                                <span className="font-medium">{t('instructionGuestPlayer')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionGuestPlayerDesc')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">👀</span>
                                <span className="font-medium">{t('instructionObserver')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionObserverDesc')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Position Configuration */}
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-blue-600">{t('instructionSpecialty')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🧤</span>
                                <span className="font-medium">{t('instructionGoalkeeper')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🛡️</span>
                                <span className="font-medium">{t('instructionDefender')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">⚙️</span>
                                <span className="font-medium">{t('instructionMidfielder')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">⚡</span>
                                <span className="font-medium">{t('instructionAttacker')}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Position Usage Information */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-700 mb-2">{t('instructionPositionsUsedFor')}</h5>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>{t('instructionAutoBalance')}</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>{t('instructionDetailedStats')}</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>{t('instructionFormationAnalysis')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/4047db49-2425-4ba4-bef2-19818a4f2a04.png" 
                          alt="Конфигуриране на играч" 
                          className="max-w-full h-auto rounded-lg max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 4: If Player Not in SureGo */}
                    <div className="grid grid-cols-1 gap-6 items-start border-l-4 border-blue-400 pl-6">
                      <div>
                        <h3 className="font-bold text-xl text-blue-500 mb-4">
                          4. {t('instructionPlayerNotInSureGo')}
                        </h3>
                        <p className="text-gray-700">
                          {t('instructionSendInvite')}
                        </p>
                      </div>
                    </div>

                    {/* Section 5: Additional Features */}
                    <div className="grid grid-cols-1 gap-6 items-start border-l-4 border-green-400 pl-6">
                      <div>
                        <h3 className="font-bold text-xl text-green-500 mb-4">
                          5. {t('instructionAdditionalFeatures')}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionEditProfiles')}</span>
                          </div>
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionChangePositions')}</span>
                          </div>
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionIndividualStats')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        {t('instructionAfterConfig')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <Users className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionAutoSuggestions')}</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionTrackPerformance')}</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionAnalyzeStrengths')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        {t('instructionFinalMessage1')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 4 - Event Creation */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">4</span>
                      {t('instructionTitle4')}
                    </h2>
                    <p className="text-white/90 text-lg">{t('instructionEventSubtitle')}</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Start New Event */}
                    <div className="border-l-4 border-warmyellow-400 pl-6">
                      <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                        1. {t('instructionStartNewEvent')}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                          <span>{t('instructionSelectEvents')}</span>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                          <span>{t('instructionPressPlusButton')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Basic Information with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          2. {t('instructionBasicInfo')}
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionEnterEventInfo')}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionAddLocation')}</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionPressNext')}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/b20c0027-a11f-4e38-bcfc-3908e8d244d0.png" 
                          alt="Основна информация за събитието" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 3: Match Settings with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          3. {t('instructionMatchSettings')}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* DateTime and Duration */}
                          <div className="bg-warmyellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-warmyellow-600">{t('instructionDateTime')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Calendar className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                                <span>{t('instructionSelectDate')}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                                <span>{t('instructionSetDuration')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Repeat Settings */}
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-blue-600">{t('instructionRepeatability')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🔹</span>
                                <span className="font-medium">{t('instructionOneTime')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionOneTimeDesc')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🔹</span>
                                <span className="font-medium">{t('instructionWeekly')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionWeeklyDesc')}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Teams Configuration */}
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-green-600">{t('instructionTeamCount')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">1️⃣</span>
                                <span className="font-medium">{t('instructionOneTeam')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionOneTeamDesc')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">2️⃣</span>
                                <span className="font-medium">{t('instructionTwoTeams')}</span>
                                <span className="text-sm text-gray-600 ml-2">{t('instructionTwoTeamsDesc')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Player Count */}
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-purple-600">{t('instructionPlayers')}</h4>
                            <div className="flex items-center">
                              <Users className="text-purple-500 mr-2 flex-shrink-0" size={16} />
                              <span>{t('instructionSetMinPlayers')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/4444e586-7ebd-49f0-9012-6a0b9d653755.png" 
                          alt="Настройки на мача" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 4: Player Invitations with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-blue-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-blue-500 mb-4">
                          4. {t('instructionPlayerInvites')}
                        </h3>
                        
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <h4 className="font-bold text-lg mb-3 text-blue-600">{t('instructionTimeIntervals')}</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">{t('instructionMainPlayers')}</span>
                              <span className="text-sm text-gray-600 ml-2">{t('instructionMainPlayersDesc')}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">{t('instructionReservePlayers')}</span>
                              <span className="text-sm text-gray-600 ml-2">{t('instructionReservePlayersDesc')}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">{t('instructionGuestPlayers')}</span>
                              <span className="text-sm text-gray-600 ml-2">{t('instructionGuestPlayersDesc')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2 text-orange-600">{t('instructionDeadline')}</h4>
                          <div className="flex items-start">
                            <span className="mr-2">📅</span>
                            <span className="text-sm">{t('instructionDeadlineDesc')}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/26d739f0-92dc-4f98-b9d6-ac7078aa9027.png" 
                          alt="Покани за играчи" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 5: Finance and Additional with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-green-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-green-500 mb-4">
                          5. {t('instructionFinanceAndAdditional')}
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          {/* Financial Settings */}
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-green-600">{t('instructionParticipationPrice')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">💰</span>
                                <span className="text-sm">{t('instructionRoundingOption')}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🎫</span>
                                <span className="text-sm">{t('instructionFreeOption')}</span>
                              </div>
                            </div>
                          </div>

                          {/* Final Steps */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-gray-600">{t('instructionFinalization')}</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">{t('instructionAddNotes')}</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">{t('instructionCompleteWithCreate')}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/6ba0458e-2518-4c24-a53a-56cb1bfe1a77.png" 
                          alt="Финанси и допълнения" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-3 flex items-center">
                        <span className="mr-2">✅</span>
                        {t('instructionEventReady')} 
                      </h3>
                      <p className="text-warmyellow-700 mb-4">
                        {t('instructionEventActive')}
                      </p>
                    </div>

                    {/* Additional Features */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        {t('instructionAdditionalPossibilities')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <Users className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionAutoTeamBalance')}</span>
                        </div>
                        <div className="flex items-start">
                          <Eye className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionTrackConfirmations')}</span>
                        </div>
                        <div className="flex items-start">
                          <Zap className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionEventNotifications')}</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionAutoFillPlayers')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        {t('instructionFinalMessage2')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 5 - Payment Management */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">5</span>
                      {t('instructionTitle5')}
                    </h2>
                    <p className="text-white/90 text-lg">{t('instructionPaymentSubtitle')}</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Event Selection */}
                    <div className="border-l-4 border-warmyellow-400 pl-6">
                      <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                        {t('instructionPaymentProcess')}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-3 flex-shrink-0 text-xs">1</div>
                          <span>{t('instructionOpenEvent')}</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4">
                          <div className="lg:col-span-2">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-3 flex-shrink-0 text-xs">2</div>
                              <span>{t('instructionPressDollarButton')}</span>
                            </div>
                          </div>
                          
                          {/* Screenshot for step 2 */}
                          <div className="flex justify-center lg:justify-end">
                            <img 
                              src="/lovable-uploads/b9137157-1ecc-4198-888b-422fe59b63d0.png" 
                              alt="Натиснете бутона $ в горния десен ъгъл" 
                              className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Payment Management Screen */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-blue-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-blue-500 mb-4">
                          3. {t('instructionPaymentScreen')}
                        </h3>
                        
                        <div className="bg-blue-50 p-6 rounded-lg mb-4">
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Users className="text-blue-500 mr-3 flex-shrink-0" size={20} />
                              <span>{t('instructionSeeParticipants')}</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="text-blue-500 mr-3 flex-shrink-0" size={20} />
                              <span>{t('instructionSeeAmount')}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-3 text-gray-700">{t('instructionForEachPlayer')}</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="mr-3">💰</span>
                              <span>{t('instructionAddExtraAmount')}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-3">📉</span>
                              <span>{t('instructionReduceAmount')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot for payment management screen */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/71eed540-ad0f-4cd9-b92f-a56c9fec5218.png" 
                          alt="Екран за управление на плащания" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Section 3: Process Completion */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-green-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-green-500 mb-4">
                          4. {t('instructionProcessCompletion')}
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">1</div>
                            <span>{t('instructionPressRedButton')}</span>
                          </div>
                          
                          <div className="ml-9">
                            <div className="flex items-center mb-2">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">2</div>
                              <span>{t('instructionSeeSummary')}</span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg ml-9">
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>{t('instructionEventPrice')}</span>
                                </div>
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>{t('instructionTotalCollected')}</span>
                                </div>
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>{t('instructionTeamTreasury')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">3</div>
                            <span>{t('instructionConfirmYes')}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot for process completion */}
                      <div className="flex justify-center lg:justify-end">
                        <img 
                          src="/lovable-uploads/9255faf1-6101-422c-92e6-3bcb0da928c4.png" 
                          alt="Завършване на процеса" 
                          className="max-w-full h-auto rounded-lg max-h-96 lg:max-h-80"
                        />
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="border-l-4 border-orange-400 pl-6">
                      <h3 className="font-bold text-xl text-orange-500 mb-4">
                        {t('instructionAdditionalInfo')}
                      </h3>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-orange-700 mb-2">
                          {t('instructionUnpaidPlayers')}
                        </p>
                        <div className="space-y-2 ml-4">
                          <div className="flex items-center">
                            <Shield className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionTreasuryCheck')}</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                            <span>{t('instructionInsufficientFunds')}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* System Advantages */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        {t('instructionSystemAdvantages')}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <Zap className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionConvenientManagement')}</span>
                        </div>
                        <div className="flex items-start">
                          <Eye className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionFullTransparency')}</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>{t('instructionAutoCalculations')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Example Section */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-blue-600 mb-3 flex items-center">
                        <span className="mr-2">💡</span>
                        {t('instructionExample')}
                      </h3>
                      <p className="text-blue-700">
                        {t('instructionExampleText')}
                      </p>
                    </div>

                    {/* Transparency Note */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-green-600 mb-3 flex items-center">
                        <Star className="mr-2" size={24} />
                        {t('instructionTransparency')}
                      </h3>
                      <p className="text-green-700">
                        {t('instructionTransparencyText')}
                      </p>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        {t('instructionFinalMessage3')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
      {/* Added margin before footer */}
      <div className="mt-16 md:mt-24"></div>
      <Footer />
    </div>
  );
};

export default Instructions;
