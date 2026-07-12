export default function Features() {
  const features = [
    {
      icon: '🚀',
      title: 'Быстрое развертывание',
      description: 'Запускаем проекты в кратчайшие сроки без потери качества',
    },
    {
      icon: '💡',
      title: 'Инновационные решения',
      description: 'Используем передовые технологии и современные подходы',
    },
    {
      icon: '🎨',
      title: 'Современный дизайн',
      description: 'Создаем красивые и функциональные интерфейсы',
    },
    {
      icon: '📱',
      title: 'Адаптивность',
      description: 'Идеальная работа на всех устройствах и экранах',
    },
    {
      icon: '⚡',
      title: 'Высокая производительность',
      description: 'Оптимизация для максимальной скорости загрузки',
    },
    {
      icon: '🔒',
      title: 'Безопасность',
      description: 'Защита данных на самом высоком уровне',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="gradient-primary text-gradient">возможности</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексный подход к разработке цифровых продуктов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
