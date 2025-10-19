import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Teachers() {
  const teachers = [
    {
      id: 1,
      name: 'Алексей Петров',
      position: 'Senior Frontend Developer',
      experience: '12 лет опыта',
      courses: 'Веб-разработка, React',
      students: 2500,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      position: 'UX/UI Designer',
      experience: '8 лет опыта',
      courses: 'Дизайн интерфейсов',
      students: 1800,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    },
    {
      id: 3,
      name: 'Дмитрий Соколов',
      position: 'Data Scientist',
      experience: '10 лет опыта',
      courses: 'Анализ данных, ML',
      students: 1200,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    },
    {
      id: 4,
      name: 'Елена Смирнова',
      position: 'Mobile Developer',
      experience: '7 лет опыта',
      courses: 'iOS/Android разработка',
      students: 950,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    },
    {
      id: 5,
      name: 'Игорь Волков',
      position: 'Marketing Expert',
      experience: '15 лет опыта',
      courses: 'Digital-маркетинг',
      students: 3200,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    },
    {
      id: 6,
      name: 'Анна Козлова',
      position: 'DevOps Engineer',
      experience: '9 лет опыта',
      courses: 'DevOps, Cloud',
      students: 780,
      image: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Наши преподаватели</h1>
          <p className="text-xl text-muted-foreground">
            Учитесь у экспертов с реальным опытом работы
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                  <p className="text-primary font-medium">{teacher.position}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>{teacher.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="BookOpen" size={16} />
                    <span>{teacher.courses}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{teacher.students} студентов</span>
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