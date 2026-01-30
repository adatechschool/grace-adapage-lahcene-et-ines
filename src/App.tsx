import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';

import Accueil from './Pages/Acceuil';
import Citation from './Pages/Citation';
import { Frise } from './Pages/Frise';
import Specificite from './Pages/Specificite';

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <NavBar />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Citation" element={<Citation />} />
        <Route path="/Frise" element={<Frise />} />
        <Route path="/Specificite" element={<Specificite />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;