
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            Proteja Sua Empresa de
            <span className="block text-white/90">Ataques Cibernéticos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Detecção avançada, resposta imediata e proteção completa contra hackers e ransomware.
          </p>
          
          <div className="flex justify-center mb-12">
            <a href="https://www.instagram.com/ocybernetico" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 h-auto"
              >
                Auditoria gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Proteção ativa contra ransomware</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Monitoramento 24/7 de ameaças</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>Resposta a incidentes em minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
