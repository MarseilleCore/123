export default function Pricing() {
  const plans = [
    {
      name: 'Стартовый',
      price: '29 990',
      period: 'проект',
      description: 'Идеально для малого бизнеса',
      features: [
        'Лендинг страница',
        'Адаптивный дизайн',
        'SEO оптимизация',
        'Форма обратной связи',
        '1 месяц поддержки',
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Профессиональный',
      price: '79 990',
      period: 'проект',
      description: 'Для растущего бизнеса',
      features: [
        'Многостраничный сайт',
        'Индивидуальный дизайн',
        'SEO + аналитика',
        'Интеграции с API',
        'CMS система',
        '3 месяца поддержки',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Корпоративный',
      price: 'от 150 000',
      period: 'проект',
      description: 'Комплексные решения',
      features: [
        'Полный цикл разработки',
        'Уникальный дизайн',
        'Продвинутая аналитика',
        'Сложные интеграции',
        'Высоконагруженные системы',
        '6 месяцев поддержки',
        'Приоритетная поддержка',
      ],
      color: 'from-orange-500 to-red-500',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Прозрачные <span className="gradient-primary text-gradient">цены</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите план, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'transform md:scale-105 border-2 border-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  Популярный
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">₽ / {plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Выбрать план
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
