
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    position: "CTO, FinanceSecure",
    company: "Fintech",
    content: "Desde a implementação da solução de cibersegurança, não tivemos nenhum incidente. A proteção 24/7 nos dá total tranquilidade para focar no crescimento.",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    position: "CISO, MedData",
    company: "Healthtech",
    content: "A auditoria revelou vulnerabilidades críticas que nem sabíamos que existiam. A resposta rápida da equipe evitou um possível vazamento de dados de pacientes.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    position: "Diretora de TI, LogiCorp",
    company: "E-commerce",
    content: "Excelente retorno sobre investimento. O que gastamos em segurança é muito menor do que teríamos perdido em um único ataque bem-sucedido.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empresas que Confiam
            <span className="block text-white/90">em Nossa Proteção</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Segurança que gera confiança e resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-white text-white" />
                  ))}
                </div>
                
                <blockquote className="text-white/80 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.position}</div>
                  <div className="text-white/40 text-sm">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
