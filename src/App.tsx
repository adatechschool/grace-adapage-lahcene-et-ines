import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Acceuil } from './Pages/Acceuil';
import { Citation } from './Pages/Citation';
import { Frise } from './Pages/Frise';
import { Specificite } from './Pages/Specificite';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" >Acceuil</NavLink>
        <NavLink to="/Citation" >Citation</NavLink>
        <NavLink to="/Frise" >Frise</NavLink>
        <NavLink to="/Specificite" >Specificite</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Citation" element={<Citation />} />
        <Route path="/Frise" element={<Frise />} />
        <Route path="/Specificite" element={<Specificite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
