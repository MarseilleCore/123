export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-10 -left-10 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 top-1/2 -right-10 bg-white opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 -bottom-10 left-1/3 bg-white opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Создаем будущее
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
              вашего бизнеса
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Инновационные цифровые решения, которые помогают компаниям расти и достигать новых высот
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105"
            >
              Начать проект
            </a>
            <a
              href="#showcase"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition transform hover:scale-105"
            >
              Посмотреть работы
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Довольных клиентов</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80">Проектов завершено</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 animate-scale-in" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
