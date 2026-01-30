export function NavBar() {
    
     (
        <header className="fixed top-0 left-0 w-full z-20">
            <nav className="bg-neutral-primary">
                <div className="flex flex-wrap justify-start items-center mx-auto max-w-7xl p-2">
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {/* Logo supprimé */}
                    </div>
                </div>
            </nav>
            <nav 
                className="bg-neutral-secondary-soft border-y border-default bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg/1280px-Panthéon_-_La_vie_de_Jeanne_d%27Arc_%28hlw16_0299%29.jpg)'
                }}
            >
                <div className="px-10 py-20 mx-auto">
                    <div className="flex items-center justify-center">
                        <div className="flex flex-row font-medium mt-30 space-x-8 rtl:space-x-reverse text-sm">
                            <a href="/" 
                               className="text-fg-brand text-4xl px-6 py-3 border-2 border-fg-brand bg-orange-200 rounded-lg hover:bg-orange-900 transition-all"
                               aria-current="page">
                                Accueil
                            </a>
                            <a href="/Specificite" 
                               className="text-fg-brand text-4xl px-6 py-3 border-2 border-fg-brand bg-orange-200 rounded-lg hover:bg-orange-900 transition-all"
                               aria-current="page">
                                Spécificité
                            </a>
                            <a href="/Frise" 
                               className="text-fg-brand text-4xl px-6 py-3 border-2 border-fg-brand bg-orange-200 rounded-lg hover:bg-orange-900 transition-all">
                                Frise chronologique
                            </a>
                            <a href="/Citation" 
                               className="text-fg-brand text-4xl px-6 py-3 border-2 border-fg-brand bg-orange-200 rounded-lg hover:bg-orange-900 transition-all">
                                Citation
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}