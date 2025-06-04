
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ShieldCheck, Eye, Lock, AlertTriangle, Network } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Firewall Avançado",
    description: "Proteção perimetral inteligente que bloqueia 99.9% das tentativas de invasão.",
    animationClass: "animate-pulse text-blue-400 group-hover:text-blue-300",
  },
  {
    icon: ShieldCheck,
    title: "Monitoramento 24/7",
    description: "Detecção e resposta em tempo real a ameaças e atividades suspeitas.",
    animationClass: "animate-pulse text-green-400 group-hover:text-green-300",
  },
  {
    icon: Eye,
    title: "Análise de Vulnerabilidades",
    description: "Identificação proativa de falhas de segurança antes que sejam exploradas.",
    animationClass: "text-white animate-blink",
  },
  {
    icon: Lock,
    title: "Criptografia Empresarial",
    description: "Proteção de dados sensíveis com criptografia de nível militar.",
    animationClass: "text-white animate-lock",
  },
  {
    icon: AlertTriangle,
    title: "Resposta a Incidentes",
    description: "Equipe especializada para contenção e recuperação rápida de ataques.",
    animationClass: "animate-pulse text-red-400 group-hover:text-red-300",
  },
  {
    icon: Network,
    title: "Segurança de Rede",
    description: "Proteção completa da infraestrutura e endpoints da sua empresa.",
    animationClass: "text-white animate-network",
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
                <service.icon className={`h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300 ${service.animationClass}`} />
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 50% { transform: scaleY(1); }
          51%, 70% { transform: scaleY(0.1); }
          71%, 100% { transform: scaleY(1); }
        }

        @keyframes lock {
          0%, 50% { transform: translateY(0); }
          25% { transform: translateY(-2px); }
          75% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }

        @keyframes network {
          0% { transform: scale(1) rotate(0deg); opacity: 1; }
          25% { transform: scale(1.1) rotate(90deg); opacity: 0.8; }
          50% { transform: scale(0.9) rotate(180deg); opacity: 0.6; }
          75% { transform: scale(1.1) rotate(270deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }

        .animate-blink {
          animation: blink 3s infinite;
        }

        .animate-lock {
          animation: lock 2s infinite ease-in-out;
        }

        .animate-network {
          animation: network 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Services;
