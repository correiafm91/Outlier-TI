
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-black via-black to-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Proteja Sua Empresa
            <span className="block text-white/90">Antes do Próximo Ataque</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Agende uma auditoria gratuita e descubra suas vulnerabilidades 
            antes que hackers as encontrem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://www.instagram.com/ocybernetico" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 text-xl px-12 py-6 h-auto"
              >
                Auditoria gratuita
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Análise completa em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Relatório detalhado de vulnerabilidades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Plano de proteção personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
