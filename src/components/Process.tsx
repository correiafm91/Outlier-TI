
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Settings, Monitor } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Análises",
    description: "Avaliação completa da infraestrutura atual, identificando vulnerabilidades e pontos de melhoria na segurança cibernética da sua empresa."
  },
  {
    number: "02", 
    icon: FileText,
    title: "Relatório para medir o nível de segurança",
    description: "Documento detalhado com métricas de segurança, análise de riscos e recomendações prioritárias para fortalecer sua proteção digital."
  },
  {
    number: "03",
    icon: Settings,
    title: "Implementação",
    description: "Execução das soluções de segurança recomendadas, configuração de sistemas e treinamento da equipe para máxima proteção."
  },
  {
    number: "04",
    icon: Monitor,
    title: "Monitoração contínua",
    description: "Acompanhamento 24/7 da segurança implementada, detecção proativa de ameaças e ajustes contínuos para manter a proteção atualizada."
  }
];

const Process = () => {
  return (
    <section id="processo" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso Processo de
            <span className="block text-white/90">Segurança Cibernética</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Metodologia comprovada em 4 etapas para garantir máxima proteção
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/10">
                {step.number}
              </div>
              <CardHeader className="pb-4 relative z-10">
                <step.icon className="h-12 w-12 text-white mb-4" />
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
