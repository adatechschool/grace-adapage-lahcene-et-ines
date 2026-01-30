export function NavBar() {
  return (
<header className="fixed top-0 left-0 w-screen z-[9999]">
      

      {/* BARRE MENU */}
      <nav
        className="bg-neutral-secondary-soft border-y border-default bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg/1280px-Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg)",
        }}
      >
        <div className="px-10 py-20 mx-auto">
          <div className="flex justify-center space-x-100 text-4xl">
            <a href="/" className=" text-fg-brand text-4xl w-64 h-24 flex items-center justify-center border-4 border-amber-800  bg-amber-100 font-serif transition-all duration-300 hover:bg-amber-800 hover:text-amber-100 hover:scale-105 hover:shadow-2xl">Accueil</a>
            <a href="/Specificite" className=" text-fg-brand text-4xl w-64 h-24 flex items-center justify-center border-4 border-amber-800  bg-amber-100 font-serif transition-all duration-300 hover:bg-amber-800 hover:text-amber-100 hover:scale-105 hover:shadow-2xl">Spécificité</a>
            <a href="/Frise" className=" text-fg-brand text-4xl w-64 h-24 flex items-center justify-center border-4 border-amber-800  bg-amber-100 font-serif transition-all duration-300 hover:bg-amber-800 hover:text-amber-100 hover:scale-105 hover:shadow-2xl">Frise</a>
            <a href="/Citation" className=" text-fg-brand text-4xl w-64 h-24 flex items-center justify-center border-4 border-amber-800  bg-amber-100 font-serif transition-all duration-300 hover:bg-amber-800 hover:text-amber-100 hover:scale-105 hover:shadow-2xl">Citation</a>
          </div>
        </div>
      </nav>

    </header>
  );
}
