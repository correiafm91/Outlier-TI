
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          CyberDefense Pro
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#servicos" className="text-white/80 hover:text-white transition-colors">
            Serviços
          </a>
          <a href="#resultados" className="text-white/80 hover:text-white transition-colors">
            Proteção
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Clientes
          </a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        <Button className="bg-white text-black hover:bg-white/90 font-medium">
          Auditoria gratuita
        </Button>
      </div>
    </header>
  );
};

export default Header;
