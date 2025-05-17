import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return <section className="section-padding relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      {/* Abstract sporty shape in background */}
      <div className="absolute inset-0 overflow-hidden opacity-100 bg-[11e7ef] bg-[#00f8ff]">
        
        
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-white/20"></div>
      </div>
      
      <div className="app-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-950">Готов ли си да играеш без главоболия?</h2>
          <p className="text-xl mb-10 text-gray-950">
            Свали SureGo сега и започни да организираш футболни събития лесно и бързо.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="py-6 px-8 rounded-xl flex items-center gap-2 shadow-lg bg-[#ffc100] text-gray-950">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#ffc100">
                <path d="M17.6 13.8l.5-1c.6-1 .3-2.2-.3-3.1-.5-.8-1.6-1.7-3-1.7h-.1c-.6 0-1.2.2-1.9.5-1.1.5-2.1 1.4-3 2.7-.8 1.3-1.4 2.8-1.5 4.4 0 1.1.2 2 .6 2.8.4.7 1.1 1.3 1.9 1.6.4.1.7.2 1.1.2.9 0 1.7-.5 2.6-1.3.9-.8 1.8-1.9 2.5-3 .7-1 1-2 1-2.8 0-.4-.1-.7-.2-1-.1.1-.1.1-.2.2-.3.4-.5.7-.5 1.1 0 .2.1.4.2.5 0 .1.1.2.1.3 0 .3-.1.7-.5 1.1-.5.5-1.4 1-2.1 1h-.2c-.3 0-.5-.1-.7-.2-.3-.2-.4-.5-.4-1 0-.4.1-.9.3-1.3.2-.4.5-.7.8-1 .3-.2.6-.3.9-.3.3 0 .6.1.8.3.2.2.4.5.5.9.1.3.1.7.1 1 0 .3-.1.6-.2.9l-.5 1.1c-.3.6-.8 1.1-1.2 1.5-.5.4-1 .6-1.4.6-.3 0-.5-.1-.7-.2-.4-.2-.7-.6-.9-1.1-.2-.5-.3-1.2-.3-2 .1-1.2.5-2.5 1.2-3.6.7-1.1 1.5-1.9 2.4-2.3.5-.2.9-.3 1.4-.3h.1c.7 0 1.4.3 1.9.9.6.6.9 1.5.9 2.4 0 1.5-1.3 3.5-2.6 4.6-.7.6-1.5.9-2.2.9-.2 0-.4 0-.6-.1-.5-.1-.9-.5-1.2-.9-.3-.5-.5-1.1-.5-1.9 0-1.3.5-2.6 1.2-3.6.7-1 1.5-1.8 2.2-2.2.4-.2.9-.3 1.3-.3.7 0 1.3.3 1.8.9.5.6.7 1.5.5 2.5l-.1.3c0 .1-.1.1-.1.2z" />
              </svg>
              <span className="text-gray-950">App Store</span>
            </Button>
            <Button className="py-6 px-8 rounded-xl flex items-center gap-2 shadow-lg bg-[#ffc100] text-gray-950">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#ffc100">
                <path d="M3 20.5V3.5c0-.8.7-1.5 1.5-1.5h15c.8 0 1.5.7 1.5 1.5v17c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5zm16.5 0V3.5h-15v17h15z" />
                <path d="M7 7l4 2 3.5-2v9.5l-3.5-2-4 2z" />
              </svg>
              <span>Google Play</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile sticky button */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 px-4">
        <button className="w-full bg-warmyellow-400 hover:bg-warmyellow-500 text-black py-3 rounded-full shadow-lg flex items-center justify-center gap-2 font-medium">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#ffc100" strokeWidth="2">
            <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
            <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
          </svg>
          <span>Свали SureGo</span>
        </button>
      </div>
    </section>;
};
export default CallToAction;