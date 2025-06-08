
const About = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Quem estar por trás do
                <span className="block text-white/90">Grupo CCSS</span>
              </h2>
              
              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Como fundador do Grupo CCSS, dedico mais de 5 anos da minha carreira 
                protegendo empresas contra ataques cibernéticos, tendo blindado 
                centenas de organizações contra ransomware, phishing e invasões de dados.
              </p>
              
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Desenvolvi uma metodologia própria que combina tecnologia de ponta 
                com análise comportamental para criar camadas de proteção que se 
                adaptam às novas ameaças em tempo real.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="inline-block">
                  <img 
                    src="https://i.postimg.cc/xjprD9Fc/491493619-913055980850280-3057480393520500498-n-1.jpg"
                    alt="Especialista em Cibersegurança"
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
