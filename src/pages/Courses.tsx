import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');

  const allCourses = [
    {
      id: 1,
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с нуля',
      duration: '3 месяца',
      level: 'beginner',
      levelText: 'Начальный',
      students: 1234,
      price: '29 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 2,
      title: 'Дизайн интерфейсов',
      description: 'UX/UI дизайн для цифровых продуктов',
      duration: '2 месяца',
      level: 'intermediate',
      levelText: 'Средний',
      students: 856,
      price: '24 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 3,
      title: 'Анализ данных',
      description: 'Python и машинное обучение на практике',
      duration: '4 месяца',
      level: 'advanced',
      levelText: 'Продвинутый',
      students: 642,
      price: '34 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 4,
      title: 'Мобильная разработка',
      description: 'Создание iOS и Android приложений',
      duration: '5 месяцев',
      level: 'intermediate',
      levelText: 'Средний',
      students: 723,
      price: '32 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 5,
      title: 'Digital-маркетинг',
      description: 'Продвижение в интернете с нуля',
      duration: '2 месяца',
      level: 'beginner',
      levelText: 'Начальный',
      students: 1456,
      price: '19 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    },
    {
      id: 6,
      title: 'DevOps инженер',
      description: 'Автоматизация и развертывание',
      duration: '3 месяца',
      level: 'advanced',
      levelText: 'Продвинутый',
      students: 489,
      price: '39 900 ₽',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/697322c9-82dc-4005-baf4-88b78a1dd01e.jpg'
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Каталог курсов</h1>
          <p className="text-xl text-muted-foreground">
            Найдите курс, который изменит вашу карьеру
          </p>
        </div>
      </section>

      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск курсов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Уровень" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все уровни</SelectItem>
                <SelectItem value="beginner">Начальный</SelectItem>
                <SelectItem value="intermediate">Средний</SelectItem>
                <SelectItem value="advanced">Продвинутый</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
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
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="BarChart" size={16} />
                      <span>{course.levelText}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{course.students} студентов</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary">{course.price}</span>
                    </div>
                    <Button className="w-full">
                      Записаться на курс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">
                Курсы не найдены. Попробуйте изменить параметры поиска.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}