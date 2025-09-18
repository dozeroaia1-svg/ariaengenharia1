import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ProgressBar } from '@/components/ProgressBar';
import { FloatingContact } from '@/components/FloatingContact';
import ariaLogo from '@/assets/aria-logo.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar />
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-[var(--transition-smooth)] ${
          isScrolled ? 'bg-background/90 backdrop-blur-xl shadow-[var(--shadow-premium)] border-b border-border/30' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <img 
                  src={ariaLogo} 
                  alt="Aria Engenharia" 
                  className="h-12 w-auto filter brightness-0 dark:invert transition-[var(--transition-smooth)]" 
                />
              </div>
              <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors hidden sm:block">
                Aria Engenharia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-[var(--transition-smooth)] hover:text-accent relative group ${
                    location.pathname === item.href
                      ? 'text-accent'
                      : 'text-foreground/70'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+5554993359191" className="flex items-center space-x-2 text-foreground/70 hover:text-accent transition-colors group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">(54) 99335-9191</span>
              </a>
              <ThemeToggle />
              <a href="https://wa.link/t4g2l5" target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/30">
            <div className="container-custom py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium transition-[var(--transition-smooth)] hover:text-accent px-3 py-2 rounded-lg ${
                      location.pathname === item.href
                        ? 'text-accent bg-accent/10'
                        : 'text-foreground/70'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-4">
                  <a href="tel:+5554993359191" className="flex items-center space-x-2 text-foreground/70 hover:text-accent transition-colors group px-3 py-2">
                    <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">(54) 99335-9191</span>
                  </a>
                  <a href="https://wa.link/t4g2l5" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-hero w-full">
                      Solicitar Orçamento
                    </Button>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Floating Contact */}
      <FloatingContact />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={ariaLogo} 
                    alt="Aria Engenharia" 
                    className="h-12 w-auto brightness-0 invert" 
                  />
                </div>
                <span className="text-xl font-bold">Aria</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Excelência em climatização e manutenção. Tecnologia, inovação e credibilidade para sua empresa.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons */}
                <a 
                  href="https://www.instagram.com/aria.engenharia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">ig</span>
                </a>
                <a 
                  href="https://wa.link/t4g2l5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:scale-125 transition-transform duration-300 cursor-pointer"
                >
                  <span className="text-white font-bold text-sm">wa</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-semibold text-xl text-accent">Serviços</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                {['Climatização', 'PMOC', 'Análise Termográfica', 'PPCI', 'Limpeza de Dutos'].map((service) => (
                  <li key={service} className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer group">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h4 className="font-semibold text-xl text-accent">Contato</h4>
              <div className="space-y-4 text-primary-foreground/80">
                <a href="tel:+5554993359191" className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer group">
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">(54) 99335-9191</span>
                </a>
                <div className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer group">
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">contato@ariaengenharia.com.br</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer group">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="font-medium">Marau, RS</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <h4 className="font-semibold text-xl text-accent">Solicite um Orçamento</h4>
              <p className="text-primary-foreground/80 leading-relaxed">
                Garanta eficiência e segurança na climatização da sua empresa.
              </p>
              <Link to="/contato">
                <Button variant="premium" className="w-full font-semibold py-3 rounded-xl transition-[var(--transition-bounce)] hover:scale-105">
                  Fale Agora com a Aria
                </Button>
              </Link>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-foreground/60">
                © 2024 Aria Engenharia. Todos os direitos reservados.
              </p>
              <p className="text-primary-foreground/60">
                Desenvolvido com tecnologia e inovação.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;