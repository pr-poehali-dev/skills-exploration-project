import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="GraduationCap" size={32} className="text-primary" />
          <span className="text-2xl font-bold">EduPlatform</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/courses" className="text-foreground hover:text-primary transition-colors">
            Курсы
          </Link>
          <Link to="/teachers" className="text-foreground hover:text-primary transition-colors">
            Преподаватели
          </Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
            Блог
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Link to="/dashboard">
              <Button>
                <Icon name="User" size={18} className="mr-2" />
                Кабинет
              </Button>
            </Link>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                Войти
              </Button>
              <Button onClick={() => setIsLoggedIn(true)}>
                Регистрация
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
