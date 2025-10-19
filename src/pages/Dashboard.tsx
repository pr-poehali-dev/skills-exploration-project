import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Dashboard() {
  const studentInfo = {
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    avatar: 'https://cdn.poehali.dev/projects/f5583351-b0d9-46f5-b7ee-23f3bad38433/files/b76c8d3b-6056-485f-91fa-85f219b73e7f.jpg'
  };

  const myCourses = [
    {
      id: 1,
      title: 'Веб-разработка',
      progress: 65,
      nextLesson: 'React Hooks',
      totalLessons: 48,
      completedLessons: 31
    },
    {
      id: 2,
      title: 'Дизайн интерфейсов',
      progress: 40,
      nextLesson: 'Прототипирование',
      totalLessons: 36,
      completedLessons: 14
    }
  ];

  const achievements = [
    { id: 1, title: 'Первый шаг', icon: 'Award', earned: true },
    { id: 2, title: '10 уроков', icon: 'Star', earned: true },
    { id: 3, title: 'Первый проект', icon: 'Trophy', earned: true },
    { id: 4, title: '50 уроков', icon: 'Medal', earned: false }
  ];

  const schedule = [
    { id: 1, title: 'Основы React', date: '20 октября', time: '19:00' },
    { id: 2, title: 'Принципы UX', date: '22 октября', time: '18:00' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-20 w-20">
              <AvatarImage src={studentInfo.avatar} />
              <AvatarFallback>ИИ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold mb-1">{studentInfo.name}</h1>
              <p className="text-muted-foreground">{studentInfo.email}</p>
            </div>
          </div>

          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList>
              <TabsTrigger value="courses">Мои курсы</TabsTrigger>
              <TabsTrigger value="schedule">Расписание</TabsTrigger>
              <TabsTrigger value="achievements">Достижения</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {myCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{course.title}</CardTitle>
                      <CardDescription>
                        {course.completedLessons} из {course.totalLessons} уроков завершено
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Прогресс</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="PlayCircle" size={16} />
                        <span>Следующий урок: {course.nextLesson}</span>
                      </div>
                      <Button className="w-full">
                        Продолжить обучение
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ближайшие занятия</CardTitle>
                  <CardDescription>Ваше расписание на эту неделю</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schedule.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="Video" className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold">{lesson.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Icon name="Calendar" size={14} />
                                {lesson.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Icon name="Clock" size={14} />
                                {lesson.time}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline">Подключиться</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ваши достижения</CardTitle>
                  <CardDescription>Отслеживайте свой прогресс</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id}
                        className={`p-6 border rounded-lg text-center ${
                          achievement.earned ? 'bg-primary/5 border-primary' : 'opacity-50'
                        }`}
                      >
                        <Icon 
                          name={achievement.icon} 
                          className={achievement.earned ? 'text-primary' : 'text-muted-foreground'}
                          size={40} 
                        />
                        <h3 className="font-semibold mt-3">{achievement.title}</h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}