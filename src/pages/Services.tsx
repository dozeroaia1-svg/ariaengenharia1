import { useEffect } from 'react';
import { Thermometer, Settings, Eye, Activity, Waves, ShieldCheck, Droplets, Wind, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ParticleEffect } from '@/components/ParticleEffect';

const Services = () => {
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
      title: 'Projeto e Execução de Sistemas de Climatização',
      description: 'Desenvolvimento completo de projetos de climatização, desde o dimensionamento até a instalação de sistemas eficientes e sustentáveis.',
      features: ['Cálculo de carga térmica', 'Seleção de equipamentos', 'Instalação completa', 'Comissionamento']
    },
    {
      icon: Settings,
      title: 'PMOC - Plano de Manutenção, Operação e Controle',
      description: 'Elaboração e execução de planos de manutenção conforme a Portaria 3.523/98 do Ministério da Saúde.',
      features: ['Análise da qualidade do ar', 'Limpeza de componentes', 'Relatórios técnicos', 'Adequação às normas']
    },
    {
      icon: Wind,
      title: 'Limpeza de Dutos',
      description: 'Limpeza profissional e higienização de dutos de ar condicionado para garantir a qualidade do ar.',
      features: ['Limpeza profunda', 'Higienização', 'Remoção de contaminantes', 'Melhoria da qualidade do ar']
    },
    {
      icon: Eye,
      title: 'Análise Termográfica',
      description: 'Inspeção termográfica para identificação de problemas em equipamentos elétricos e mecânicos.',
      features: ['Detecção de aquecimento', 'Prevenção de falhas', 'Relatórios detalhados', 'Recomendações técnicas']
    },
    {
      icon: Settings,
      title: 'Manutenção Corretiva, Preventiva e Preditiva',
      description: 'Serviços completos de manutenção para garantir o funcionamento otimizado dos seus equipamentos.',
      features: ['Manutenção preventiva', 'Correção de falhas', 'Manutenção preditiva', 'Monitoramento contínuo']
    },
    {
      icon: Activity,
      title: 'Análise Vibratória',
      description: 'Monitoramento de vibrações em equipamentos rotativos para detecção precoce de problemas.',
      features: ['Análise de vibrações', 'Diagnóstico de falhas', 'Monitoramento contínuo', 'Plano de ação']
    },
    {
      icon: Waves,
      title: 'Análise Gravimétrica',
      description: 'Avaliação da qualidade do ar através de análises gravimétricas para garantir ambientes saudáveis.',
      features: ['Coleta de amostras', 'Análise laboratorial', 'Relatórios técnicos', 'Recomendações']
    },
    {
      icon: ShieldCheck,
      title: 'PPCI - Plano de Prevenção e Proteção Contra Incêndio',
      description: 'Desenvolvimento de projetos de prevenção e combate a incêndios conforme normas vigentes.',
      features: ['Projeto de sistemas', 'Adequação às normas', 'Instalação', 'Manutenção']
    }
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
              <span className="block text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-pulse">Serviços</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-light slide-left px-4">
              Soluções completas em climatização e manutenção para atender todas as necessidades da sua empresa com excelência e tecnologia de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding tech-pattern">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-glass scale-in group">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 group-hover:scale-110 transform duration-300 mx-auto sm:mx-0">
                      <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm sm:text-base text-muted-foreground">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nosso Processo
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Uma metodologia comprovada que garante a excelência em cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '01', title: 'Análise', description: 'Avaliação detalhada das necessidades do cliente' },
              { number: '02', title: 'Projeto', description: 'Desenvolvimento de soluções customizadas' },
              { number: '03', title: 'Execução', description: 'Implementação com qualidade e precisão' },
              { number: '04', title: 'Suporte', description: 'Acompanhamento e manutenção contínua' }
            ].map((step, index) => (
              <div key={index} className="text-center scale-in group">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold group-hover:scale-110 transform duration-300 group-hover:shadow-[var(--shadow-glow)]">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Benefícios dos Nossos <span className="text-primary">Serviços</span>
              </h2>
              <div className="space-y-6">
                {[
                  'Redução significativa no consumo de energia',
                  'Melhoria da qualidade do ar ambiente',
                  'Aumento da vida útil dos equipamentos',
                  'Conformidade com todas as normas técnicas',
                  'Relatórios técnicos detalhados',
                  'Suporte técnico especializado'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transform duration-300"></div>
                    <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-right">
              <div className="glass-card p-12 h-96 flex items-center justify-center group hover:shadow-[var(--shadow-glow)] transition-all duration-500">
                <Droplets className="h-32 w-32 text-accent group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Precisa de Nossos Serviços?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Entre em contato conosco e descubra como podemos ajudar sua empresa com soluções de climatização e manutenção de alta qualidade.
            </p>
            <Button size="lg" className="btn-hero text-lg px-8 py-4 font-semibold">
              Solicitar Orçamento Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;