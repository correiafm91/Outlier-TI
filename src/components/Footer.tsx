
const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            TechConsult<span className="text-white/60">Pro</span>
          </div>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Transformando negócios através de soluções tecnológicas estratégicas.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60 mb-8">
            <a href="mailto:contato@techconsultpro.com" className="hover:text-white transition-colors">
              contato@techconsultpro.com
            </a>
            <a href="tel:+5511999999999" className="hover:text-white transition-colors">
              (11) 99999-9999
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/40 text-sm">
              © 2024 TechConsult Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
