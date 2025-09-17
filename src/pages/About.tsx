import { useEffect } from 'react';
import { Target, Eye, Heart, Users, Building, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ParticleEffect } from '@/components/ParticleEffect';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções inovadoras e sustentáveis em climatização e manutenção, garantindo eficiência energética e qualidade do ar para nossos clientes.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecida como referência em engenharia de climatização, liderando o mercado através da inovação tecnológica e excelência no atendimento.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Integridade, inovação, sustentabilidade, excelência técnica e compromisso com a satisfação total de nossos clientes.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Projetos Executados' },
    { number: '150+', label: 'Clientes Atendidos' },
    { number: '99%', label: 'Satisfação dos Clientes' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <ParticleEffect />
        <div className="container-custom relative z-20">
          <div className="max-w-5xl mx-auto text-center text-white fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Sobre a 
              <span className="block text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-pulse">Aria Engenharia</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-light slide-left px-4">
              Uma história de inovação, excelência e compromisso com a qualidade em soluções de climatização e manutenção.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding tech-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Nossa <span className="text-primary">História</span>
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  A Aria Engenharia nasceu da visão de profissionais experientes que identificaram a necessidade de soluções mais eficientes e sustentáveis no mercado de climatização e manutenção.
                </p>
                <p>
                  Desde nossa fundação, nos dedicamos a oferecer serviços de alta qualidade, utilizando as mais modernas tecnologias disponíveis no mercado. Nossa equipe altamente qualificada trabalha incansavelmente para garantir que cada projeto seja executado com precisão e excelência.
                </p>
                <p>
                  Ao longo dos anos, construímos uma sólida reputação baseada na confiança, inovação e resultados excepcionais. Hoje, somos reconhecidos como uma das principais empresas do setor, atendendo clientes de diversos segmentos.
                </p>
              </div>
            </div>
            <div className="slide-right">
              <div className="glass-card p-12 h-96 flex items-center justify-center group hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <Building className="h-32 w-32 text-accent group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Princípios
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Os valores que nos orientam e definem nossa identidade como empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-premium scale-in group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <value.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Certificações e Qualificações
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 px-4">
              Nosso compromisso com a excelência é respaldado por certificações técnicas e qualificações profissionais reconhecidas no mercado.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {['PMOC', 'PPCI', 'ISO 9001', 'ABRAVA'].map((cert, index) => (
              <div key={index} className="card-glass p-4 sm:p-8 text-center group hover:shadow-[var(--shadow-glow)] transition-all duration-300 scale-in">
                <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform">{cert}</div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;