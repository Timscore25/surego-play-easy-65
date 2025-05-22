
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check, Users, DollarSign } from "lucide-react";

const Instructions = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 pb-16">
        {/* Wave SVG consistent with main page style */}
        <div className="relative w-full overflow-hidden line-height-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 md:h-24 bg-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#11e7ef"></path>
          </svg>
        </div>

        <div className="app-container px-4 sm:px-6 mt-8 md:mt-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Инструкции</h1>
          
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Section 1 - Easy Organization */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">1</span>
                    Лесна организация на футболни срещи
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    SureGo улеснява организирането на футболни мачове с приятели:
                  </p>
                  
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Мениджърът на отбора:</h3>
                      <ul className="ml-5 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span> 
                          <span>Създава събитие с дата и час.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Определя играчите (основни, резерви, гости).</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Автоматично изпраща покани.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">SureGo автоматично:</h3>
                      <ul className="ml-5 space-y-2">
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                          <span>Изпраща покани.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                          <span>Проследява потвърждения в реално време.</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                          <span>Предоставя контрол и гъвкавост на мениджъра.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Допълнителни функции:</h3>
                      <ul className="ml-5 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Лесно финансово управление на отбора.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Пълна прозрачност за всички играчи.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 2 - Account Creation */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">2</span>
                    Създаване на профил – бързо и удобно!
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    Регистрацията е лесна и ви дава незабавен достъп:
                  </p>
                  
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Изтеглете приложението:</h3>
                      <div className="flex flex-wrap gap-4 ml-5 mt-3">
                        <a href="https://apps.apple.com/bg/app/surego/id1671429121" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-14 w-auto" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.intellicsengineering.surego2" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center w-auto">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-14 w-auto" />
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Изберете метод за регистрация:</h3>
                      <ul className="ml-5 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span> 
                          <span>Google акаунт (бързо и удобно)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Apple ID (за потребители на iOS)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Имейл (необходимо потвърждение)</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Активирайте профила:</h3>
                      <ul className="ml-5 space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Потвърдете регистрацията през получения имейл.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                          <span>Влезте в приложението с вашия имейл и парола.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 3 - Team Creation */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">3</span>
                    Създаване на вашия отбор
                  </h2>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">
                    Създайте отбор в няколко лесни стъпки:
                  </p>
                  
                  <ul className="ml-5 space-y-3">
                    <li className="flex items-center">
                      <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">1</span>
                      <span>Отворете „Отбори".</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">2</span>
                      <span>Натиснете „+" (горен десен ъгъл).</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">3</span>
                      <span>Попълнете име, държава, град и добавете снимка.</span>
                    </li>
                    <li className="flex items-center">
                      <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">4</span>
                      <span>Натиснете „Запази".</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 4 - Player Management */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">4</span>
                    Добавяне и управление на играчи
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    Поддържайте отбора си организиран и готов за игра:
                  </p>
                  
                  <div className="ml-0">
                    <p className="mb-3 font-medium">Отворете „Отбори" {'->'}  Изберете вашия отбор {'->'}  „Играчи" {'->'}  „+".</p>
                    
                    <div className="space-y-5">
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Добавете играчи чрез:</h3>
                        <ul className="ml-5 space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span> 
                            <span>SureGo ID (директно и бързо)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                            <span>Телефонен номер (лесно свързване)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#11e7ef] mr-2 mt-1">{'\u2022'}</span>
                            <span>Контакти от телефона (автоматично и удобно)</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Конфигурирайте роли и позиции на играчите:</h3>
                        <div className="grid md:grid-cols-2 gap-4 ml-5">
                          <div>
                            <p className="font-medium mb-2">Роли:</p>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Основен</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Резервен</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Гост</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Наблюдател</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium mb-2">Позиции:</p>
                            <ul className="space-y-1">
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Вратар</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Защитник</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Полузащитник</span>
                              </li>
                              <li className="flex items-center">
                                <span className="text-[#11e7ef] mr-2">{'\u2022'}</span>
                                <span>Нападател</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Предимства:</h3>
                        <ul className="ml-5 space-y-2">
                          <li className="flex items-start">
                            <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                            <span>Автоматично балансиране на отборите.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                            <span>Индивидуална статистика за играчите.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-green-500 mr-2 mt-0.5" size={18} />
                            <span>Покани за нови потребители чрез SMS, имейл или месинджър.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 5 - Event Creation */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">5</span>
                    Създаване на събитие
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    Бързо и ефективно организирайте футболни събития:
                  </p>
                  
                  <div className="space-y-5">
                    <div>
                      <ul className="ml-0 space-y-3">
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">1</span>
                          <span>Изберете вашия отбор {'->'}  „Събития" {'->'}  „+".</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">2</span>
                          <span>Попълнете име, описание и локация.</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">3</span>
                          <span>Задайте дата, час, продължителност и повторяемост.</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">4</span>
                          <span>Определете типа мач (един или два отбора).</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">5</span>
                          <span>Настройте времеви интервали за покани (основни, резерви, гости).</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">6</span>
                          <span>Посочете цена за участие или изберете безплатно събитие.</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">7</span>
                          <span>Натиснете „Създай събитие".</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Автоматични функции:</h3>
                      <div className="bg-blue-50 p-4 rounded-md ml-0">
                        <ul className="ml-2 space-y-2">
                          <li className="flex items-start">
                            <Calendar className="text-[#11e7ef] mr-3 mt-0.5" size={18} />
                            <span>Изпращане на покани.</span>
                          </li>
                          <li className="flex items-start">
                            <Users className="text-[#11e7ef] mr-3 mt-0.5" size={18} />
                            <span>Проследяване на потвържденията.</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="text-[#11e7ef] mr-3 mt-0.5" size={18} />
                            <span>Балансиране на отборите.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Section 6 - Payment Management */}
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#11e7ef] to-[#11e7ef]/80 p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white flex items-center">
                    <span className="bg-white text-[#11e7ef] w-8 h-8 flex items-center justify-center rounded-full mr-3">6</span>
                    Управление на плащанията
                  </h2>
                </div>
                <div className="p-6 space-y-6">
                  <p className="text-gray-700">
                    Лесно и прозрачно финансово управление на вашите събития:
                  </p>
                  
                  <div className="space-y-5">
                    <div>
                      <ol className="ml-0 space-y-3">
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">1</span>
                          <span>Изберете събитие и натиснете "$".</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">2</span>
                          <span>Управлявайте плащанията на играчите (добавяйте или намалявайте суми).</span>
                        </li>
                        <li className="flex items-center">
                          <span className="flex items-center justify-center rounded-full bg-gray-100 w-7 h-7 text-[#11e7ef] font-semibold mr-3">3</span>
                          <span>Завършете процеса с потвърждение.</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-[#11e7ef]">Ключови предимства:</h3>
                      <div className="bg-green-50 p-4 rounded-md">
                        <ul className="ml-2 space-y-2">
                          <li className="flex items-start">
                            <DollarSign className="text-green-600 mr-3 mt-0.5" size={18} />
                            <span>Удобно и ясно финансово управление.</span>
                          </li>
                          <li className="flex items-start">
                            <DollarSign className="text-green-600 mr-3 mt-0.5" size={18} />
                            <span>Автоматични изчисления и баланси.</span>
                          </li>
                          <li className="flex items-start">
                            <DollarSign className="text-green-600 mr-3 mt-0.5" size={18} />
                            <span>Остатъците се съхраняват автоматично за следващи събития.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
