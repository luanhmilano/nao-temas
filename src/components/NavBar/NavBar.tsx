export default function NavBar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-800 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <button 
            onClick={() => scrollToSection('verses')}
            className="text-slate-100 hover:text-blue-400 transition-colors"
          >
            Versículos
          </button>
          <button 
            onClick={() => scrollToSection('liturgy')}
            className="text-slate-100 hover:text-blue-400 transition-colors"
          >
            Liturgia
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-slate-100 hover:text-blue-400 transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('footer')}
            className="text-slate-100 hover:text-blue-400 transition-colors"
          >
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}