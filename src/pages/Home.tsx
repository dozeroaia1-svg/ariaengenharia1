import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, Award, Thermometer, Settings, Eye, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ParticleEffect } from '@/components/ParticleEffect';
import ariaLogo from '@/assets/aria-logo.png';
import gsiLogo from '@/assets/clients/gsi-logo.png';
import laFontanaLogo from '@/assets/clients/la-fontana-logo.png';
import grainProteinLogo from '@/assets/clients/grain-protein-logo.png';
import dipesulLogo from '@/assets/clients/dipesul-logo.png';
import brfLogo from '@/assets/clients/brf-logo.png';
import client2Logo from '@/assets/clients/client2-logo.png';
import hcrLogo from '@/assets/clients/hcr-logo.png';
import sicrediLogo from '@/assets/clients/sicredi-logo.png';

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

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

  const services = [
    {
      icon: Thermometer,
      title: 'Climatização',
      description: 'Projeto e execução de sistemas de climatização completos e eficientes.'
    },
    {
      icon: Settings,
      title: 'PMOC',
      description: 'Plano de Manutenção, Operação e Controle para sistemas de climatização.'
    },
    {
      icon: Droplets,
      title: 'Limpeza de Dutos',
      description: 'Limpeza e higienização profissional de sistemas de ar condicionado.'
    },
    {
      icon: Eye,
      title: 'Análise Termográfica',
      description: 'Inspeção termográfica para identificação de problemas em equipamentos.'
    }
  ];

  const differentials = [
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais modernas tecnologias e equipamentos do mercado.'
    },
    {
      icon: Shield,
      title: 'Credibilidade',
      description: 'Anos de experiência e certificações que garantem qualidade e segurança.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e certificados.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometimento com a excelência em todos os nossos serviços.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <ParticleEffect />
        <div className="container-custom relative z-20">
          <div className="text-center text-white max-w-5xl mx-auto fade-in">
            <div className="mb-12 scale-in">
              <img src={ariaLogo} alt="Aria Engenharia" className="h-24 w-auto mx-auto mb-8 brightness-0 invert logo-animation" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Excelência em 
              <span className="block text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-pulse">Climatização</span>
              <span className="block">e Manutenção</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-light slide-left px-4">
              Tecnologia, inovação e credibilidade para garantir o melhor desempenho dos seus sistemas de climatização.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center slide-right">
              <Button 
                size="lg" 
                className="btn-hero text-xl px-12 py-6 text-white font-bold"
                onClick={() => window.open('https://wa.link/t4g2l5', '_blank')}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Link to="/servicos">
                <Button variant="glass" size="lg" className="text-xl px-12 py-6 font-semibold">
                  Nossos Serviços
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções completas em climatização e manutenção para atender todas as necessidades da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-premium fade-in group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <Link to="/servicos">
              <Button variant="premium" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CARROSSEL DE CLIENTES - DIRETAMENTE AQUI */}
      <section className="py-20 bg-secondary/30 dark:bg-secondary/10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Clientes que Confiam na <span className="text-primary">Aria</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Empresas que escolheram nossa excelência em climatização
            </p>
          </div>
          
          <div className="relative overflow-hidden h-16 sm:h-20 md:h-24">
            {/* Track A */}
            <div className="absolute left-0 top-0 flex gap-3 sm:gap-6 md:gap-12 min-w-max will-change-transform animate-[marquee_12s_linear_infinite] sm:animate-[marquee_10s_linear_infinite] md:animate-[marquee_9s_linear_infinite]">
              {clientLogos.map((client, index) => (
                <div
                  key={`a-${index}`}
                  className="flex-shrink-0 w-28 h-16 sm:w-36 sm:h-20 md:w-48 md:h-24 flex items-center justify-center"
                >
                  <div className="bg-card rounded-xl shadow-lg p-2 sm:p-4 md:p-6 w-full h-full flex items-center justify-center hover:shadow-xl transition-shadow border border-border/20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-auto object-contain filter dark:brightness-90 max-h-8 sm:max-h-12 md:max-h-16"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Track B (seamless) */}
            <div className="absolute left-0 top-0 flex gap-3 sm:gap-6 md:gap-12 min-w-max will-change-transform animate-[marquee2_12s_linear_infinite] sm:animate-[marquee2_10s_linear_infinite] md:animate-[marquee2_9s_linear_infinite]">
              {clientLogos.map((client, index) => (
                <div
                  key={`b-${index}`}
                  className="flex-shrink-0 w-28 h-16 sm:w-36 sm:h-20 md:w-48 md:h-24 flex items-center justify-center"
                >
                  <div className="bg-card rounded-xl shadow-lg p-2 sm:p-4 md:p-6 w-full h-full flex items-center justify-center hover:shadow-xl transition-shadow border border-border/20">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-auto object-contain filter dark:brightness-90 max-h-8 sm:max-h-12 md:max-h-16"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Aria Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Por que escolher a <span className="text-primary">Aria</span>?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Nossa experiência e dedicação garantem soluções de alta qualidade para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center fade-in group">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors group-hover:scale-110 transform duration-300">
                  <differential.icon className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{differential.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
              Garanta eficiência e segurança na climatização da sua empresa
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 px-4">
              Entre em contato conosco e descubra como podemos otimizar seus sistemas de climatização com tecnologia de ponta e serviços especializados.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4 font-semibold">
                Fale Agora com a Aria Engenharia
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;