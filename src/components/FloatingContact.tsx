import { MessageCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-64 card-glass">
          <CardContent className="p-4">
            <div className="space-y-3">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:bg-accent/20 hover:text-accent-foreground"
                onClick={() => window.open('tel:+5554993359191')}
              >
                <Phone className="h-4 w-4 mr-2" />
                (54) 99335-9191
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:bg-accent/20 hover:text-accent-foreground"
                onClick={() => window.open('mailto:contato@aria.com.br')}
              >
                <Mail className="h-4 w-4 mr-2" />
                contato@aria.com.br
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-foreground hover:bg-accent/20 hover:text-accent-foreground"
                onClick={() => window.open('https://wa.link/t4g2l5')}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-floating"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}