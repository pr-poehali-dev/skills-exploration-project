import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Как выбрать первый курс программирования',
      excerpt: 'Полное руководство для начинающих разработчиков',
      date: '15 октября 2024',
      category: 'Карьера',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    },
    {
      id: 2,
      title: 'Топ-10 навыков разработчика в 2024',
      excerpt: 'Какие технологии учить, чтобы оставаться востребованным',
      date: '12 октября 2024',
      category: 'Технологии',
      readTime: '8 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    },
    {
      id: 3,
      title: 'Истории успеха наших выпускников',
      excerpt: 'Как онлайн-обучение изменило их карьеру',
      date: '8 октября 2024',
      category: 'Истории',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    },
    {
      id: 4,
      title: 'UX/UI дизайн: с чего начать',
      excerpt: 'Пошаговый план освоения профессии дизайнера',
      date: '5 октября 2024',
      category: 'Дизайн',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    },
    {
      id: 5,
      title: 'Машинное обучение для начинающих',
      excerpt: 'Что нужно знать перед стартом в ML',
      date: '1 октября 2024',
      category: 'ML',
      readTime: '10 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    },
    {
      id: 6,
      title: 'Секреты эффективного обучения онлайн',
      excerpt: 'Как учиться продуктивно и не выгореть',
      date: '28 сентября 2024',
      category: 'Обучение',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/eb3301fb-cc89-4ebd-b54c-0a6c8e3f5152.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Блог</h1>
          <p className="text-xl text-muted-foreground">
            Статьи об обучении, карьере и технологиях
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Calendar" size={16} />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}