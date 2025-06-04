
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para implementar a proteção completa?",
    answer: "A implementação completa das soluções de cibersegurança leva de 3 a 4 semanas, incluindo configuração dos sistemas, treinamentos para sua equipe e testes de penetração. Esse prazo garante uma proteção robusta e eficiente.",
  },
  {
    question: "Como funciona o diagnóstico inicial gratuito?",
    answer: "É uma auditoria completa de segurança que dura 24 horas onde analisamos toda sua infraestrutura digital, identificamos vulnerabilidades críticas e mapeamos possíveis vetores de ataque. Você recebe um relatório detalhado sem compromisso.",
  },
  {
    question: "Vocês garantem proteção contra todos os tipos de ataques?",
    answer: "Oferecemos proteção multicamadas contra 99.8% das ameaças conhecidas, incluindo ransomware, phishing, malware e ataques DDoS. Monitoramento 24/7 com resposta imediata a novas ameaças.",
  },
  {
    question: "Quais tecnologias de segurança vocês utilizam?",
    answer: "Utilizamos as melhores soluções do mercado: firewalls de próxima geração, sistemas de detecção e resposta (EDR), análise comportamental com IA, criptografia avançada e ferramentas de threat intelligence em tempo real.",
  },
  {
    question: "Como funciona o monitoramento 24/7?",
    answer: "Nossa central de operações de segurança (SOC) monitora sua rede ininterruptamente, com analistas especializados que respondem a incidentes em tempo real e podem conter ameaças antes que causem danos.",
  },
  {
    question: "Vocês ajudam com compliance e regulamentações?",
    answer: "Sim, garantimos conformidade com LGPD, ISO 27001, PCI DSS e outras regulamentações relevantes para seu setor. Fornecemos toda documentação necessária para auditorias e certificações.",
  },
  {
    question: "Qual o investimento necessário para proteção empresarial?",
    answer: "O investimento varia conforme o porte da empresa e nível de proteção necessário. Oferecemos planos escaláveis e modelos de pagamento flexíveis baseados no valor protegido e complexidade da infraestrutura.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas
            <span className="block text-white/90">Frequentes</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Esclarecemos suas principais dúvidas sobre cibersegurança
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/5 border-white/10 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-white/80 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
