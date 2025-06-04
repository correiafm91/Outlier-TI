
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Proteja Sua Empresa de
            <span className="block text-white/90">Ataques Cibernéticos</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
            Soluções completas de cibersegurança que reduzem riscos em até 95% 
            e protegem seus dados críticos 24/7. Defesa ativa contra ameaças.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 h-auto"
            >
              Auditoria gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Análise completa de vulnerabilidades</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Proteção 24/7 garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Compliance assegurado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
