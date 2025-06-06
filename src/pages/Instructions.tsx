
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
        <div className="relative w-full h-16 md:h-24 overflow-hidden mt-[4.5rem] border-0 outline-0">
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
                      Създаване на профил в SureGo – бързо и лесно!
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      
                      {/* Column 1: Download App */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Свалете приложението</h3>
                        <p className="text-gray-700">Достъпно е в:</p>
                        
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

                      {/* Column 2: Choose Registration Method */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Изберете начин за регистрация</h3>
                        <p className="text-gray-700">Можете да се регистрирате чрез:</p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm">Google акаунт</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm">Apple ID</span>
                          </div>
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span className="text-sm">Имейл (изберете „Създай профил")</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/725b6e85-7d86-40e2-af08-5c84f3003734.png" 
                            alt="SureGo Registration Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 3: Email Registration Process */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Ако сте избрали имейл регистрация:</h3>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Въведете вашия имейл и парола</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Натиснете „Създай профил"</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Проверете имейла си за потвърждаващ линк</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/ba86bf50-12d1-407f-acb3-937e90167e87.png" 
                            alt="SureGo Email Registration Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 4: Activate Profile */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Активирайте профила си</h3>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Отворете имейла и кликнете върху линка за потвърждение</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Върнете се в приложението и изберете „Вход с имейл"</span>
                          </div>
                          <div className="flex items-start">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={16} />
                            <span>Въведете имейл и парола – и готово!</span>
                          </div>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/c2e265b6-f413-40cb-bb89-c051823235b1.png" 
                            alt="SureGo Profile Activation Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md mt-8">
                      <p className="text-lg font-medium text-warmyellow-700 text-center">
                        Вече имате активен профил и сте готови да започнете да използвате SureGo!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instruction 2 - Team Creation - Horizontal Layout */}
            <div className="w-full">
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-warmyellow-400 to-warmyellow-300 p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white flex items-center">
                      <span className="bg-white text-warmyellow-500 w-10 h-10 flex items-center justify-center rounded-full mr-4 flex-shrink-0">2</span>
                      Създайте своя отбор
                    </h2>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      
                      {/* Column 1: Open Teams */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Отворете раздела</h3>
                        <div className="flex items-start">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">1</div>
                          <span className="text-sm">Отворете раздела „Отбори"</span>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Open Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 2: Press Plus */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Натиснете „+"</h3>
                        <div className="flex items-start">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">2</div>
                          <span className="text-sm">Натиснете „+" (в горния десен ъгъл)</span>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Plus Button Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 3: Fill Information */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Попълнете данни</h3>
                        <div className="flex items-start">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">3</div>
                          <span className="text-sm">Попълнете име, държава, град и добавете снимка</span>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
                        <div className="mt-4 flex justify-center">
                          <img 
                            src="/lovable-uploads/db795962-c771-4b56-abf6-d694b954f10b.png" 
                            alt="SureGo Teams Fill Data Screenshot" 
                            className="max-w-full h-auto rounded-lg max-h-48"
                          />
                        </div>
                      </div>

                      {/* Column 4: Save */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-xl text-warmyellow-500">Запазете</h3>
                        <div className="flex items-start">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-2 flex-shrink-0 text-xs">4</div>
                          <span className="text-sm">Натиснете „Запази" – и готово!</span>
                        </div>
                        
                        {/* Mobile Screenshot - Below this section */}
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
                        Вече сте готови да организирате мачовете си без главоболия!
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
                      Добавяне и настройка на играчи в отбора
                    </h2>
                    <p className="text-white/90 text-lg">Вече имате създаден отбор - нека го организираме перфектно!</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Access Players Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          1. Достъп до секцията за играчи:
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Отворете раздела „Отбори"</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Изберете вашия отбор</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Кликнете върху „Играчи"</span>
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
                          2. Добавяне на нов играч:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Натиснете „+" (в горния десен ъгъл)</span>
                          </div>
                          <div className="ml-6">
                            <p className="font-medium mb-2">Изберете удобен за вас метод:</p>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Users className="text-blue-500 mr-2 flex-shrink-0" size={16} />
                                <span>Чрез SureGo ID (намерете го в профила на играча)</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span>Чрез телефонен номер (ръчно въвеждане)</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="text-purple-500 mr-2 flex-shrink-0" size={16} />
                                <span>От контактите на телефона (автоматично свързване)</span>
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
                          3. Конфигуриране на играча
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* Role Configuration */}
                          <div className="bg-warmyellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-warmyellow-600">Задаване на роля:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🏆</span>
                                <span className="font-medium">Основен</span>
                                <span className="text-sm text-gray-600 ml-2">(приоритетни покани)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🔄</span>
                                <span className="font-medium">Резервен</span>
                                <span className="text-sm text-gray-600 ml-2">(поканват се втори)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">👋</span>
                                <span className="font-medium">Гост</span>
                                <span className="text-sm text-gray-600 ml-2">(поканват се при нужда)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">👀</span>
                                <span className="font-medium">Наблюдател</span>
                                <span className="text-sm text-gray-600 ml-2">(само преглед)</span>
                              </div>
                            </div>
                          </div>

                          {/* Position Configuration */}
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-blue-600">Специалност (позиция):</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🧤</span>
                                <span className="font-medium">Вратар</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🛡️</span>
                                <span className="font-medium">Защитник</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">⚙️</span>
                                <span className="font-medium">Полузащитник</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">⚡</span>
                                <span className="font-medium">Нападател</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Position Usage Information */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-700 mb-2">Позициите се използват за:</h5>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>Автоматично балансиране на отборите при мачове</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>Детайлна статистика по пост</span>
                            </div>
                            <div className="flex items-center">
                              <Check className="text-green-500 mr-2 flex-shrink-0" size={14} />
                              <span>Анализ на използваните формации</span>
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
                          4. Ако играчът все още не е в SureGo:
                        </h3>
                        <p className="text-gray-700">
                          Можете да му изпратите инвайт линк по SMS, имейл или месинджър – той ще получи директна връзка за изтегляне на приложението и регистрация.
                        </p>
                      </div>
                    </div>

                    {/* Section 5: Additional Features */}
                    <div className="grid grid-cols-1 gap-6 items-start border-l-4 border-green-400 pl-6">
                      <div>
                        <h3 className="font-bold text-xl text-green-500 mb-4">
                          5. Допълнителни възможности:
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>Редактиране на профили по-късно</span>
                          </div>
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>Промяна на позиции и роли</span>
                          </div>
                          <div className="flex items-center">
                            <Settings className="text-green-500 mr-2 flex-shrink-0" size={16} />
                            <span>Индивидуална статистика за всеки играч</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        След като конфигурирате играчите, ще можете:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <Users className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Да получавате автоматични предложения за оптимални състави</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Да следите производителността по позиции</span>
                        </div>
                        <div className="flex items-start">
                          <Check className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Да анализирате силните и слабите страни на отбора</span>
                        </div>
                      </div>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        Приложението ще ви помогне да управлявате отбора професионално, като ви предоставя всички необходими инструменти за успех! ⚽📊
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
                      Създаване на футболно събитие в SureGo
                    </h2>
                    <p className="text-white/90 text-lg">Организирайте перфектни мачове с няколко лесни стъпки!</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Start New Event */}
                    <div className="border-l-4 border-warmyellow-400 pl-6">
                      <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                        1. Стартиране на ново събитие:
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                          <span>От екрана на отбора изберете „Събития"</span>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                          <span>Натиснете „+" (горен десен ъгъл)</span>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Basic Information with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-l-4 border-warmyellow-400 pl-6">
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                          2. Основна информация:
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Check className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Въведете име и описание на събитието</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Добавете място (с възможност за точна локация чрез „Карта" бутон)</span>
                          </div>
                          <div className="flex items-center">
                            <ArrowRight className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                            <span>Натиснете „Напред"</span>
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
                          3. Настройки на мача:
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          {/* DateTime and Duration */}
                          <div className="bg-warmyellow-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-warmyellow-600">Дата и време:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Calendar className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                                <span>Изберете дата и начален час</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="text-warmyellow-500 mr-2 flex-shrink-0" size={16} />
                                <span>Задайте продължителност (в минути)</span>
                              </div>
                            </div>
                          </div>

                          {/* Repeat Settings */}
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-blue-600">Повторяемост:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">🔹</span>
                                <span className="font-medium">Еднократно</span>
                                <span className="text-sm text-gray-600 ml-2">(само за този ден)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🔹</span>
                                <span className="font-medium">Ежеседмично</span>
                                <span className="text-sm text-gray-600 ml-2">(автоматично повторение)</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Teams Configuration */}
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-green-600">Брой отбори:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">1️⃣</span>
                                <span className="font-medium">1 отбор</span>
                                <span className="text-sm text-gray-600 ml-2">(игра срещу външен отбор)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">2️⃣</span>
                                <span className="font-medium">2 отбора</span>
                                <span className="text-sm text-gray-600 ml-2">(вътрешен мач)</span>
                              </div>
                            </div>
                          </div>

                          {/* Player Count */}
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-purple-600">Играчи:</h4>
                            <div className="flex items-center">
                              <Users className="text-purple-500 mr-2 flex-shrink-0" size={16} />
                              <span>Задайте минимален брой играчи</span>
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
                          4. Покани за играчи:
                        </h3>
                        
                        <div className="bg-blue-50 p-4 rounded-lg mb-4">
                          <h4 className="font-bold text-lg mb-3 text-blue-600">Времеви интервали за покани:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">Основни играчи</span>
                              <span className="text-sm text-gray-600 ml-2">(първи получават покана)</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">Резерви</span>
                              <span className="text-sm text-gray-600 ml-2">(получават след основните)</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2">⏰</span>
                              <span className="font-medium">Гости</span>
                              <span className="text-sm text-gray-600 ml-2">(получават последни)</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2 text-orange-600">Краен срок за потвърждение:</h4>
                          <div className="flex items-start">
                            <span className="mr-2">📅</span>
                            <span className="text-sm">Ако не се събере достатъчно играчи до този момент, събитието се отменя автоматично</span>
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
                          5. Финанси и допълнения:
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                          {/* Financial Settings */}
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-green-600">Цена за участие:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <span className="mr-2">💰</span>
                                <span className="text-sm">Възможност за закръгляване на сумата (остатъкът отива в хазната)</span>
                              </div>
                              <div className="flex items-center">
                                <span className="mr-2">🎫</span>
                                <span className="text-sm">Безплатен вариант (ако желаете)</span>
                              </div>
                            </div>
                          </div>

                          {/* Final Steps */}
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-bold text-lg mb-3 text-gray-600">Финализиране:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center">
                                <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">Добавете бележки (по избор)</span>
                              </div>
                              <div className="flex items-center">
                                <Check className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">Завършете с „Създай събитие"</span>
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
                        Готово! 
                      </h3>
                      <p className="text-warmyellow-700 mb-4">
                        Събитието е активно и поканите са изпратени според зададените настройки.
                      </p>
                    </div>

                    {/* Additional Features */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        Допълнителни възможности:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <Users className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Автоматично балансиране на отборите (ако е вътрешен мач)</span>
                        </div>
                        <div className="flex items-start">
                          <Eye className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Проследяване на потвърждения в реално време</span>
                        </div>
                        <div className="flex items-start">
                          <Zap className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Известия за промени по събитието</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Опция за автоматично попълване на липсващи играчи от резервите</span>
                        </div>
                      </div>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        Приложението ще ви уведоми за всяка промяна в статуса на събитието и ще ви помогне да организирате перфектен мач без главоболия! ⚽📅
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
                      Управление на плащанията за събитие
                    </h2>
                    <p className="text-white/90 text-lg">Ефективно и прозрачно управление на финансите за всяко събитие!</p>
                  </div>
                  <div className="p-6 md:p-8 space-y-8">
                    
                    {/* Section 1: Event Selection */}
                    <div className="border-l-4 border-warmyellow-400 pl-6">
                      <h3 className="font-bold text-xl text-warmyellow-500 mb-4">
                        Процес на регистрация на плащания:
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-3 flex-shrink-0 text-xs">1</div>
                          <span>Отворете желаното събитие като го изберете от предстоящи или минали</span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start mt-4">
                          <div className="lg:col-span-2">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-warmyellow-500 font-semibold mr-3 flex-shrink-0 text-xs">2</div>
                              <span>Натиснете бутона "$" в горния десен ъгъл</span>
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
                          3. Екран за управление на плащания:
                        </h3>
                        
                        <div className="bg-blue-50 p-6 rounded-lg mb-4">
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <Users className="text-blue-500 mr-3 flex-shrink-0" size={20} />
                              <span>Виждате списък с всички участници</span>
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="text-blue-500 mr-3 flex-shrink-0" size={20} />
                              <span>В горната част се показва сумата за плащане (която може да се редактира)</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-3 text-gray-700">За всеки играч имате възможност да:</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <span className="mr-3">💰</span>
                              <span>Добавите допълнителна сума (остава в портфейла на играча за бъдещи събития)</span>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-3">📉</span>
                              <span>Намалите сумата</span>
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
                          4. Завършване на процеса:
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">1</div>
                            <span>Натиснете червения бутон в горния десен ъгъл</span>
                          </div>
                          
                          <div className="ml-9">
                            <div className="flex items-center mb-2">
                              <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">2</div>
                              <span>Ще видите обобщение с:</span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg ml-9">
                              <div className="space-y-2">
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>Цената на събитието</span>
                                </div>
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>Общо събрана сума</span>
                                </div>
                                <div className="flex items-center">
                                  <ArrowRight className="text-green-500 mr-2 flex-shrink-0" size={16} />
                                  <span>Сума за хазната на отбора</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="flex items-center justify-center rounded-full bg-gray-100 w-6 h-6 text-green-500 font-semibold mr-3 flex-shrink-0 text-xs">3</div>
                            <span>Потвърдете с "Да"</span>
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
                        Допълнителна информация:
                      </h3>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-orange-700 mb-2">
                          Ако има играчи, които не са платили, системата проверява:
                        </p>
                        <div className="space-y-2 ml-4">
                          <div className="flex items-center">
                            <Shield className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                            <span>Дали хазната на отбора може да покрие липсващата сума</span>
                          </div>
                          <div className="flex items-center">
                            <Shield className="text-orange-500 mr-2 flex-shrink-0" size={16} />
                            <span>Ако няма достатъчно средства, процесът не може да бъде завършен</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* System Advantages */}
                    <div className="bg-gradient-to-r from-warmyellow-100 to-warmyellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-warmyellow-600 mb-4 flex items-center">
                        <span className="mr-2">🌟</span>
                        Предимства на системата:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start">
                          <Zap className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Удобно управление на плащанията без необходимост от връщане на ресто</span>
                        </div>
                        <div className="flex items-start">
                          <Eye className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Пълна финансова прозрачност</span>
                        </div>
                        <div className="flex items-start">
                          <Settings className="text-warmyellow-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span>Автоматични изчисления и баланси</span>
                        </div>
                      </div>
                    </div>

                    {/* Example Section */}
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-blue-600 mb-3 flex items-center">
                        <span className="mr-2">💡</span>
                        Пример:
                      </h3>
                      <p className="text-blue-700">
                        Ако играч плати 20 лв. вместо 15 лв., оставащите 5 лв. се запазват в неговия баланс за следващи събития.
                      </p>
                    </div>

                    {/* Transparency Note */}
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl text-green-600 mb-3 flex items-center">
                        <Star className="mr-2" size={24} />
                        Прозрачност:
                      </h3>
                      <p className="text-green-700">
                        Всички играчи имат достъп до своя баланс и история на плащанията, което гарантира прозрачност.
                      </p>
                    </div>

                    {/* Final Message */}
                    <div className="bg-warmyellow-50 p-6 rounded-md text-center">
                      <p className="text-lg font-medium text-warmyellow-700">
                        Системата за плащания в SureGo прави финансовото управление лесно, прозрачно и ефективно за всички! 💰⚡
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
