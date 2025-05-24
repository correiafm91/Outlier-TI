
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Transforme Seu Negócio com
            <span className="block text-white/90">Tecnologia Estratégica</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Implementamos soluções tecnológicas que reduzem custos em até 40% 
            e aumentam a produtividade em 3x. Sem complexidade. Só resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 h-auto"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
            >
              Ver Estudos de Caso
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Consultoria sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>ROI garantido em 90 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Suporte contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
