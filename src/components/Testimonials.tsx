
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    position: "CEO, TechStart",
    company: "Startup de Fintech",
    content: "A consultoria transformou nossa operação. Reduzimos custos em 40% e aumentamos nossa capacidade de processamento em 5x. ROI foi alcançado em apenas 2 meses.",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    position: "CTO, LogiFlow",
    company: "E-commerce B2B",
    content: "Implementação impecável. A automação dos nossos processos nos permitiu focar no que realmente importa: crescer o negócio. Recomendo sem hesitar.",
    rating: 5,
  },
  {
    name: "Roberto Mendes",
    position: "Diretor de TI, ManufacPro",
    company: "Indústria 4.0",
    content: "Nunca vi uma consultoria tão focada em resultados. Cada solução proposta veio com métricas claras e prazos definidos. Superaram todas as expectativas.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Dizem Nossos
            <span className="block text-white/90">Clientes</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Resultados que falam por si só
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
