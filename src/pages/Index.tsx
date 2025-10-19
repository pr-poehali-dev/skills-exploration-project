import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Index() {
  const courses = [
    {
      id: 1,
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с нуля',
      duration: '3 месяца',
      level: 'Начальный',
      students: 1234,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 2,
      title: 'Дизайн интерфейсов',
      description: 'UX/UI дизайн для цифровых продуктов',
      duration: '2 месяца',
      level: 'Средний',
      students: 856,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 3,
      title: 'Анализ данных',
      description: 'Python и машинное обучение на практике',
      duration: '4 месяца',
      level: 'Продвинутый',
      students: 642,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    }
  ];

  const features = [
    {
      icon: 'BookOpen',
      title: 'Качественные курсы',
      description: 'Программы разработаны экспертами индустрии'
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Практикующие специалисты с реальным опытом'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Подтвердите свои знания официальным документом'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Обучение, которое меняет жизнь
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Освойте востребованные профессии онлайн с поддержкой опытных наставников
              </p>
              <div className="flex gap-4">
                <Link to="/courses">
                  <Button size="lg" className="text-lg">
                    Выбрать курс
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-lg">
                    Узнать больше
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg"
                alt="Обучение онлайн"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные курсы</h2>
            <p className="text-xl text-muted-foreground">
              Выберите направление и начните обучение уже сегодня
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BarChart" size={16} />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{course.students} студентов</span>
                  </div>
                  <Link to="/courses" className="block mt-4">
                    <Button className="w-full">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Начните обучение прямо сейчас</h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь
          </p>
          <Link to="/courses">
            <Button size="lg" variant="secondary" className="text-lg">
              Выбрать курс
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-muted-foreground">
                Образовательная платформа нового поколения
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Разделы</h3>
              <div className="space-y-2">
                <Link to="/courses" className="block text-muted-foreground hover:text-primary">
                  Курсы
                </Link>
                <Link to="/teachers" className="block text-muted-foreground hover:text-primary">
                  Преподаватели
                </Link>
                <Link to="/blog" className="block text-muted-foreground hover:text-primary">
                  Блог
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-muted-foreground hover:text-primary">
                  Контакты
                </Link>
                <a href="#" className="block text-muted-foreground hover:text-primary">
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@eduplatform.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
