
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Nossos clientes começam a ver resultados tangíveis entre 30-60 dias após o início da implementação. Oferecemos marcos semanais para acompanhar o progresso e garantir que as metas sejam alcançadas no prazo.",
  },
  {
    question: "Como vocês garantem o ROI prometido?",
    answer: "Estabelecemos KPIs claros desde o início e monitoramos constantemente. Se não atingirmos as métricas acordadas em 90 dias, trabalhamos sem custo adicional até alcançar os resultados prometidos.",
  },
  {
    question: "Quais tecnologias vocês implementam?",
    answer: "Trabalhamos com as principais plataformas do mercado: AWS, Azure, Google Cloud, Microsoft 365, Salesforce, SAP, e desenvolvemos soluções customizadas quando necessário. Nossa escolha sempre se baseia no que gera mais valor para seu negócio.",
  },
  {
    question: "Vocês oferecem suporte após a implementação?",
    answer: "Sim, oferecemos suporte contínuo e treinamento para sua equipe. Também fazemos revisões trimestrais para identificar novas oportunidades de otimização e crescimento.",
  },
  {
    question: "Como funciona o diagnóstico inicial gratuito?",
    answer: "É uma análise completa de 24 horas onde analisamos seu negócio e mapeamos seus principais desafios, identificamos oportunidades de melhoria e criamos um plano de ação personalizado. Sem compromisso, sem pegadinhas.",
  },
  {
    question: "Qual o investimento necessário?",
    answer: "O investimento varia conforme o escopo do projeto. Oferecemos opções flexíveis de pagamento e modelos de resultado compartilhado baseados nos resultados alcançados.",
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
            Esclarecemos suas principais dúvidas
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
