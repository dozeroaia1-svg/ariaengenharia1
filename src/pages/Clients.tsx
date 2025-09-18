import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Building2, Factory, Hospital, School, ShoppingBag, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ParticleEffect } from '@/components/ParticleEffect';
import gsiLogo from '@/assets/clients/gsi-logo.png';
import laFontanaLogo from '@/assets/clients/la-fontana-logo.png';
import grainProteinLogo from '@/assets/clients/grain-protein-logo.png';
import dipesulLogo from '@/assets/clients/dipesul-logo.png';
import brfLogo from '@/assets/clients/brf-logo.png';
import client2Logo from '@/assets/clients/client2-logo.png';
import hcrLogo from '@/assets/clients/hcr-logo.png';
import sicrediLogo from '@/assets/clients/sicredi-logo.png';

const Clients = () => {
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

  const clientSegments = [
    {
      icon: Building2,
      title: 'Edifícios Corporativos',
      description: 'Soluções de climatização para ambientes corporativos modernos'
    },
    {
      icon: Factory,
      title: 'Indústrias',
      description: 'Sistemas industriais de controle climático e ventilação'
    },
    {
      icon: Hospital,
      title: 'Hospitais e Clínicas',
      description: 'Climatização especializada para ambientes de saúde'
    },
    {
      icon: School,
      title: 'Instituições de Ensino',
      description: 'Ambientes educacionais confortáveis e saudáveis'
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Centers',
      description: 'Sistemas de climatização para grandes espaços comerciais'
    },
    {
      icon: Building2,
      title: 'Hotéis e Resorts',
      description: 'Conforto térmico para o setor hoteleiro'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'Gerente de Facilities',
      company: 'Torre Empresarial São Paulo',
      content: 'A Aria Engenharia transformou nosso sistema de climatização. Reduzimos 30% no consumo de energia e melhoramos significativamente o conforto dos nossos ocupantes.',
      rating: 5
    },
    {
      name: 'Ana Santos',
      position: 'Diretora de Operações',
      company: 'Hospital Central',
      content: 'Profissionalismo exemplar e conhecimento técnico incomparável. A qualidade do ar em nosso hospital melhorou drasticamente após os serviços da Aria.',
      rating: 5
    },
    {
      name: 'Roberto Lima',
      position: 'Engenheiro Chefe',
      company: 'Indústria Metalúrgica ABC',
      content: 'Excelente trabalho na adequação do nosso sistema industrial. A equipe demonstrou alto nível técnico e cumpriu todos os prazos estabelecidos.',
      rating: 5
    }
  ];

  const clientLogos = [
    { name: 'GSI', logo: gsiLogo },
    { name: 'La Fontana', logo: laFontanaLogo },
    { name: 'Grain & Protein', logo: grainProteinLogo },
    { name: 'Dipesul', logo: dipesulLogo },
    { name: 'BRF', logo: brfLogo },
    { name: 'Client 2', logo: client2Logo },
    { name: 'HCR', logo: hcrLogo },
    { name: 'Sicredi', logo: sicrediLogo }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <ParticleEffect />
        <div className="container-custom relative z-20">
          <div className="max-w-5xl mx-auto text-center text-white fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Nossos 
              <span className="block text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-pulse">Clientes</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-light slide-left px-4">
              Conheça algumas das empresas que confiam na Aria Engenharia para suas soluções de climatização e manutenção.
            </p>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Segmentos Atendidos
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Atendemos diversos segmentos do mercado com soluções personalizadas para cada necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clientSegments.map((segment, index) => (
              <Card key={index} className="card-glass scale-in group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <segment.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">{segment.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{segment.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Empresas que Confiam em Nós
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Algumas das empresas que escolheram a Aria Engenharia como parceira em suas soluções de climatização.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="scale-in">
                <div className="glass-card p-8 shadow-md hover:shadow-[var(--shadow-glow)] transition-all duration-300 h-24 flex items-center justify-center group">
                  <div className="text-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Junte-se aos Nossos Clientes Satisfeitos
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Faça parte do grupo de empresas que escolheram a excelência da Aria Engenharia para suas soluções de climatização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.link/t4g2l5" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero text-lg px-8 py-4 font-semibold">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link to="/servicos">
                <Button 
                  variant="glass" 
                  className="text-lg px-8 py-4 font-semibold"
                >
                  Ver Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;