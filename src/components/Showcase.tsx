export default function Showcase() {
  const projects = [
    {
      title: 'E-commerce Платформа',
      category: 'Веб-разработка',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Мобильное Приложение',
      category: 'Mobile App',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Корпоративный Сайт',
      category: 'Брендинг',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'SaaS Платформа',
      category: 'Веб-сервис',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Дашборд Аналитики',
      category: 'UI/UX',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'CRM Система',
      category: 'Бизнес-решение',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наши <span className="gradient-secondary text-gradient">работы</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Проекты, которыми мы гордимся
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-110`}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Посмотреть детали →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
