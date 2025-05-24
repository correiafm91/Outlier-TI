
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Shield, BarChart3, Cog, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Migração para Cloud",
    description: "Reduza custos de infraestrutura em até 60% com migração estratégica para nuvem.",
  },
  {
    icon: Code,
    title: "Ferramentas para automatizar processos",
    description: "Elimine tarefas repetitivas e aumente produtividade com automação inteligente.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Tome decisões baseadas em dados com dashboards e análises avançadas.",
  },
  {
    icon: Shield,
    title: "Segurança Digital",
    description: "Proteja seu negócio com soluções de segurança robustas e compliance.",
  },
  {
    icon: Cog,
    title: "Infraestrutura",
    description: "Conecte todas suas ferramentas em um ecossistema único e eficiente.",
  },
  {
    icon: Zap,
    title: "Otimização de Performance",
    description: "Acelere seus sistemas e processos para máxima eficiência operacional.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções que Geram
            <span className="block text-white/90">Resultados Reais</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Cada implementação é planejada para impactar diretamente seus resultados financeiros
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <service.icon className="h-12 w-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
