import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Орест Верейский",
      description: "Иллюстрации к произведениям о донском казачестве",
      image: "https://cdn.poehali.dev/projects/f31a5b47-eb74-4460-88a6-1480fa763ef8/files/9340b5a7-1a4f-468e-8f41-ea11cfa5cd21.jpg"
    },
    {
      id: 2,
      title: "Алексей Кравченко",
      description: "Графические работы, посвящённые казачьей культуре",
      image: "https://cdn.poehali.dev/projects/f31a5b47-eb74-4460-88a6-1480fa763ef8/files/81096555-2275-4c50-99f3-05ab96b0ce71.jpg"
    },
    {
      id: 3,
      title: "Исторические артефакты",
      description: "Предметы быта и культуры донских казаков",
      image: "https://cdn.poehali.dev/projects/f31a5b47-eb74-4460-88a6-1480fa763ef8/files/cae7c890-e6a2-46d7-a23c-c12c2af92757.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/f31a5b47-eb74-4460-88a6-1480fa763ef8/files/9340b5a7-1a4f-468e-8f41-ea11cfa5cd21.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center text-white max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Знакомство с донским казачеством
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Донское казачество — уникальное военное и культурное сообщество, сформировавшееся на берегах реки Дон. 
            С XVI века казаки служили защитниками южных рубежей России, создав особую культуру, соединившую 
            воинскую доблесть, демократические традиции и глубокую связь с родной землёй.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('about')}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Узнать больше
            <Icon name="ChevronDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-primary">О донском казачестве</h2>
          
          <div className="space-y-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="BookOpen" size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Уникальное явление в истории России</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Донское казачество представляет собой самобытное сообщество, возникшее на пересечении 
                      культур и традиций. Казаки создали особую форму общественного устройства, основанную на 
                      принципах самоуправления, военной демократии и коллективного землепользования.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="MapPin" size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Этапы формирования и развития</h3>
                    <ul className="space-y-3 text-lg text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span><strong>XVI век:</strong> Формирование казачьих общин на Дону, создание Войска Донского</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span><strong>XVII век:</strong> Участие в освоении Сибири, защита южных границ Российского государства</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span><strong>XVIII век:</strong> Интеграция в состав Российской империи, сохранение особых прав и привилегий</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span><strong>XIX век:</strong> Расцвет казачьей культуры, участие в войнах с Наполеоном и Кавказских походах</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Award" size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-primary">Вклад в историю и культуру</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      Донские казаки оставили неизгладимый след в истории России. Их воинская доблесть проявилась 
                      в защите южных рубежей, освоении новых территорий и участии во всех значимых военных 
                      конфликтах России. Казачья культура обогатила русское искусство, литературу и музыку.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">
                      По материалам выставки Государственного Русского музея, посвящённой культуре и истории 
                      донского казачества.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-primary">«Тихий Дон»</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Роман Михаила Шолохова «Тихий Дон» — монументальное произведение, отобразившее судьбу 
                донского казачества в переломную эпоху начала XX века. Написанный в 1925-1940 годах, 
                роман стал литературным памятником казачьей культуре.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Через историю семьи Мелеховых Шолохов показал драматические изменения в жизни казачества: 
                Первую мировую войну, революцию и Гражданскую войну. Роман раскрывает казачий быт, традиции, 
                нравственные ценности и трагедию народа, разделённого войной.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                <p className="text-muted-foreground italic">
                  «Тихий Дон» — одно из главных произведений русской литературы XX века, 
                  за которое Михаил Шолохов был удостоен Нобелевской премии в 1965 году.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f31a5b47-eb74-4460-88a6-1480fa763ef8/files/cae7c890-e6a2-46d7-a23c-c12c2af92757.jpg"
                alt="Тихий Дон"
                className="rounded-lg shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold mb-4 text-center text-primary">Фотогалерея</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Знакомство с творчеством художников Ореста Верейского и Алексея Кравченко, 
            посвятивших свои работы истории и культуре донского казачества
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Icon name="Maximize2" size={24} className="text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-12 text-center text-primary">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Свяжитесь с нами</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Icon name="Globe" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Веб-сайт</p>
                        <a href="#" className="text-accent hover:underline">poehali.dev</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Телефон</p>
                        <a href="tel:+78001234567" className="text-muted-foreground hover:text-accent">+7 (800) 123-45-67</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Электронная почта</p>
                        <a href="mailto:info@donkazak.ru" className="text-muted-foreground hover:text-accent">info@donkazak.ru</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-1">Адрес</p>
                        <p className="text-muted-foreground">г. Ростов-на-Дону, ул. Большая Садовая, д. 47</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-semibold text-primary mb-4">Мы в социальных сетях</h4>
                    <div className="flex gap-4">
                      <a href="#" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                        <Icon name="Facebook" size={24} className="text-accent" />
                      </a>
                      <a href="#" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                        <Icon name="Instagram" size={24} className="text-accent" />
                      </a>
                      <a href="#" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                        <Icon name="Youtube" size={24} className="text-accent" />
                      </a>
                      <a href="#" className="bg-accent/10 p-3 rounded-full hover:bg-accent/20 transition-colors">
                        <Icon name="Twitter" size={24} className="text-accent" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="h-96 md:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.4862436843393!2d39.71088031573562!3d47.22286597916441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b99140000001%3A0x8c5c3f2d2f8c9f8c!2z0KPQu9C40YbQsCDQkdC-0LvRjNGI0LDRjyDQodCw0LTQvtCy0LDRjywgNDcsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDQwMDA!5e0!3m2!1sru!2sru!4v1635171234567!5m2!1sru!2sru"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">© 2024 Донское казачество. Все права защищены.</p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="https://rusmuseum.ru" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Русский музей
            </a>
            <a href="https://ru.wikipedia.org/wiki/Донское_казачество" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              История донского казачества
            </a>
            <a href="https://www.culture.ru/themes/255059/kulturnoe-nasledie-donskogo-kazachestva" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              Культурное наследие
            </a>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
            <img 
              src={galleryItems.find(item => item.id === selectedImage)?.image}
              alt="Full size"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
