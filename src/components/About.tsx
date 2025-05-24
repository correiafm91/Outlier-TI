
const About = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Quem está por trás
                <span className="block text-white/90">dos resultados</span>
              </h2>
              
              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Com mais de 10 anos transformando negócios através da tecnologia, 
                já ajudei dezenas de empresas a otimizar seus processos, reduzir custos 
                e acelerar o crescimento.
              </p>
              
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Minha abordagem é simples: entender profundamente seu negócio, 
                identificar as oportunidades reais de melhoria e implementar 
                soluções que geram resultados mensuráveis em prazo determinado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-white/50">
                <div>✓ Especialista em transformação digital</div>
                <div>✓ ROI comprovado em 90 dias</div>
                <div>✓ Mais de 34 negócios otimizados</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Gustavo Correia - Consultor de TI
                </h3>
                <div className="inline-block">
                  <img 
                    src="https://i.postimg.cc/xjprD9Fc/491493619-913055980850280-3057480393520500498-n-1.jpg"
                    alt="Gustavo Correia - Consultor de TI"
                    className="w-80 h-80 object-cover rounded-lg mx-auto border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
