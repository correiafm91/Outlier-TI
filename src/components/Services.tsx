
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ShieldCheck, Eye, Lock, AlertTriangle, Network } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Firewall Avançado",
    description: "Proteção perimetral inteligente que bloqueia 99.9% das tentativas de invasão.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoramento 24/7",
    description: "Detecção e resposta em tempo real a ameaças e atividades suspeitas.",
  },
  {
    icon: Eye,
    title: "Análise de Vulnerabilidades",
    description: "Identificação proativa de falhas de segurança antes que sejam exploradas.",
  },
  {
    icon: Lock,
    title: "Criptografia Empresarial",
    description: "Proteção de dados sensíveis com criptografia de nível militar.",
  },
  {
    icon: AlertTriangle,
    title: "Resposta a Incidentes",
    description: "Equipe especializada para contenção e recuperação rápida de ataques.",
  },
  {
    icon: Network,
    title: "Segurança de Rede",
    description: "Proteção completa da infraestrutura e endpoints da sua empresa.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções Completas de
            <span className="block text-white/90">Cibersegurança</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Proteja sua empresa com tecnologias de ponta e expertise especializada
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <service.icon className="h-12 w-12 text-white mb-4" />
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
