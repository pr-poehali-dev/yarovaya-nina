import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Яровая Нина Андреевна</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'bio', 'education', 'career', 'achievements', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'bio' && 'Биография'}
                  {section === 'education' && 'Образование'}
                  {section === 'career' && 'Карьера'}
                  {section === 'achievements' && 'Достижения'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-primary leading-tight">
                  Яровая Нина Андреевна
                </h2>
                <p className="text-xl text-muted-foreground">
                  Инженер отдела нагрузок и динамики конструкции
                </p>
                <p className="text-lg text-muted-foreground">
                  ПАО "РКК "Энергия"
                </p>
                <div className="flex gap-4 pt-4">
                  <Button onClick={() => scrollToSection('bio')} size="lg">
                    Узнать больше
                  </Button>
                  <Button onClick={() => scrollToSection('contacts')} variant="outline" size="lg">
                    Контакты
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://cdn.poehali.dev/files/dd5a18df-2a98-411e-a8a7-2b69c4be6a61.jpg"
                    alt="Яровая Нина Андреевна"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="bio" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Биография</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Calendar" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">27 ноября 1996 года</h3>
                      <p className="text-muted-foreground">Дата рождения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="MapPin" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">г. Пушкино</h3>
                      <p className="text-muted-foreground">Место рождения</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="GraduationCap" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">МБОУ СОШ №8</h3>
                      <p className="text-muted-foreground">Среднее образование</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="education" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Образование</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="University" className="text-accent" size={20} />
                      <h3 className="text-2xl font-bold">Московский Энергетический Институт</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">2018 год</p>
                    <p className="font-semibold mb-2">Направление: Прикладная механика</p>
                    <div className="mt-4 bg-muted p-4 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Бакалаврская работа:</p>
                      <p className="text-sm text-muted-foreground">
                        "Применение асимптотического метода В.В. Болотина для исследования 
                        спектров колебаний прямоугольных пластин в магнитном поле"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="career" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Карьера</h2>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name="Briefcase" className="text-accent" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">ПАО "РКК "Энергия"</h3>
                    <p className="text-lg font-semibold text-accent mb-2">
                      Инженер отдела нагрузок и динамики конструкции
                    </p>
                    <p className="text-muted-foreground mb-4">С 2018 года по настоящее время</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Специализируется на анализе вибрационного нагружения орбитальных модулей 
                      и исследовании динамики конструкций космических аппаратов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="achievements" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Достижения</h2>
            <div className="max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Icon name="Award" className="text-accent" size={32} />
                        <h3 className="text-2xl font-bold">Второе место</h3>
                      </div>
                      <p className="text-lg font-semibold mb-4">
                        XXIII Научно-техническая конференция молодых учёных и специалистов
                      </p>
                      <p className="text-muted-foreground mb-4">ПАО «РКК «Энергия»</p>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2">Тема работы:</p>
                        <p className="text-sm text-muted-foreground">
                          "Экспериментальное определение и анализ картины вибрационного 
                          нагружения орбитального модуля"
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                        <img
                          src="https://cdn.poehali.dev/files/bbd9b51f-16bb-4baf-aec8-afd4ca842f37.jpg"
                          alt="Награждение на конференции"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Контакты</h2>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Phone" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Телефон</p>
                      <a href="tel:89017931770" className="text-lg font-semibold hover:text-accent transition-colors">
                        8 (901) 793-17-70
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Icon name="Mail" className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Электронная почта</p>
                      <a 
                        href="mailto:ninapuh19961828@mail.ru" 
                        className="text-lg font-semibold hover:text-accent transition-colors break-all"
                      >
                        ninapuh19961828@mail.ru
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Яровая Нина Андреевна. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
