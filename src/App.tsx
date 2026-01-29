import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Citation from './Pages/Citation';
import Accueil from './Pages/Acceuil';
import { Frise } from './Pages/Frise';
import Specificite from './Pages/Specificite';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Accueil</NavLink>
      
      </nav>

      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Citation" element={<Citation />} />
        <Route path="/Frise" element={<Frise/>} />
        <Route path="/Specificite" element={<Specificite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
