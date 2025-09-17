import gsiLogo from '@/assets/clients/gsi-logo.png';
import laFontanaLogo from '@/assets/clients/la-fontana-logo.png';
import grainProteinLogo from '@/assets/clients/grain-protein-logo.png';
import dipesulLogo from '@/assets/clients/dipesul-logo.png';
import brfLogo from '@/assets/clients/brf-logo.png';
import client2Logo from '@/assets/clients/client2-logo.png';
import hcrLogo from '@/assets/clients/hcr-logo.png';
import sicrediLogo from '@/assets/clients/sicredi-logo.png';

const ClientCarousel = () => {
  const clients = [
    { name: 'GSI', logo: gsiLogo },
    { name: 'La Fontana', logo: laFontanaLogo },
    { name: 'Grain & Protein', logo: grainProteinLogo },
    { name: 'Dipesul', logo: dipesulLogo },
    { name: 'BRF', logo: brfLogo },
    { name: 'Client 2', logo: client2Logo },
    { name: 'HCR', logo: hcrLogo },
    { name: 'Sicredi', logo: sicrediLogo }
  ];

  // Duplicate the array for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  console.log('ClientCarousel rendering!');

  return (
    <section className="py-16 bg-secondary/10" style={{minHeight: '200px', backgroundColor: '#f0f0f0'}}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Clientes que Confiam na <span className="text-primary">Aria</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresas que escolheram a excelência da Aria Engenharia
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left gap-8">
            {duplicatedClients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
                style={{border: '2px solid red'}}
              >
                <div className="bg-white rounded-lg shadow-lg p-4 w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    style={{maxWidth: '120px', maxHeight: '60px'}}
                    onError={(e) => {
                      console.error('Failed to load image:', client.name, client.logo);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Image loaded:', client.name);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;