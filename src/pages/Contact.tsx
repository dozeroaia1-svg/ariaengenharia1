import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ParticleEffect } from '@/components/ParticleEffect';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(54) 99335-9191',
      action: 'tel:+5554993359191'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@ariaengenharia.com.br',
      action: 'mailto:contato@ariaengenharia.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Marau, RS',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 8h às 18h',
      action: null
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
              Entre em 
              <span className="block text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-pulse">Contato</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 leading-relaxed font-light slide-left px-4">
              Estamos prontos para atender suas necessidades. Fale conosco e descubra como podemos ajudar sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-glass scale-in group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <info.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{info.title}</h3>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12">
            {/* Contact Form */}
            <div className="slide-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-foreground text-center lg:text-left">
                Envie sua <span className="text-primary">Mensagem</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 text-center lg:text-left px-4 lg:px-0">
                Preencha o formulário abaixo e nossa equipe entrará em contato em breve para oferecer a melhor solução para sua empresa.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="w-full glass-card border-white/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(54) 99335-9191"
                      className="w-full glass-card border-white/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full glass-card border-white/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    rows={6}
                    className="w-full glass-card border-white/20"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="card-glass scale-in">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                Atendimento de <span className="text-primary">Emergência</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Para situações de emergência, nossa equipe está disponível 24h para atendimento urgente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-hero" 
                  onClick={() => window.open('tel:+5554993359191')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergência 24h: (54) 99335-9191
                </Button>
                <Button 
                  variant="glass-dark" 
                  className="text-primary"
                  onClick={() => window.open('https://wa.link/t4g2l5', '_blank')}
                >
                  WhatsApp: (54) 99335-9191
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding hero-gradient">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto text-white fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4">
              Vamos Conversar Sobre Seu Projeto?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-white/90 px-4">
              Nossa equipe de especialistas está pronta para desenvolver a solução ideal para suas necessidades de climatização e manutenção.
            </p>
            <a href="https://wa.link/t4g2l5" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-hero text-lg px-8 py-4 font-semibold">
                Agendar Consulta Técnica Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;