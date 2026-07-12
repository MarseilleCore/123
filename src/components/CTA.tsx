export default function CTA() {
  return (
    <section id="contact" className="py-20 gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Готовы начать свой проект?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Свяжитесь с нами сегодня и получите бесплатную консультацию
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
                />
              </div>
              
              <input
                type="text"
                placeholder="Тема"
                className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              />
              
              <textarea
                placeholder="Расскажите о вашем проекте"
                rows={4}
                className="w-full px-6 py-4 rounded-3xl bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-white">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@modernsite.ru</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
