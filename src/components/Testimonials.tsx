export default function Testimonials() {
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'CEO, TechStart',
      avatar: '👩‍💼',
      text: 'Команда превзошла все наши ожидания! Проект был сдан в срок, качество на высшем уровне.',
      rating: 5,
    },
    {
      name: 'Михаил Иванов',
      role: 'Директор по маркетингу',
      avatar: '👨‍💼',
      text: 'Профессиональный подход и отличное понимание наших потребностей. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Елена Смирнова',
      role: 'Основатель, GrowthLab',
      avatar: '👩‍💻',
      text: 'Современные решения и креативный подход помогли нам выделиться на рынке.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Что говорят <span className="gradient-success text-gradient">клиенты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Отзывы наших довольных партнеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
