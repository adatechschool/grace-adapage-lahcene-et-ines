export function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
     

      {/* BARRE MENU */}
      <nav
        className="bg-neutral-secondary-soft border-y border-default bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg/1280px-Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg)",
        }}
      >
        <div className="px-20 py-40 mx-auto">
          <div className="flex justify-center space-x-100 text-4xl">
            <a href="/" className="w-30 h-15 flex items-center justify-center bg-orange-200 border-2 border-fg-brand text-fg-brand font-bold text-xl rounded-lg hover:bg-orange-900 hover:text-white transition-all">Accueil</a>
            <a href="/Specificite" className="w-30 h-15 flex items-center justify-center bg-orange-200 border-2 border-fg-brand text-fg-brand font-bold text-xl rounded-lg hover:bg-orange-900 hover:text-white transition-all">Spécificité</a>
            <a href="/Frise" className="w-30 h-15 flex items-center justify-center bg-orange-200 border-2 border-fg-brand text-fg-brand font-bold text-xl rounded-lg hover:bg-orange-900 hover:text-white transition-all">Frise</a>
            <a href="/Citation" className="w-30 h-15 flex items-center justify-center bg-orange-200 border-2 border-fg-brand text-fg-brand font-bold text-xl rounded-lg hover:bg-orange-900 hover:text-white transition-all">Citation</a>
          </div>
        </div>
      </nav>

    </header>
  );
}