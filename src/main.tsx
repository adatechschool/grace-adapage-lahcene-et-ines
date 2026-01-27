

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Specificite } from './Pages/Specificite.tsx';
import { Citation } from './Pages/Citation.tsx';
import { Frise } from './Pages/Frise.tsx';




const router = createBrowserRouter([
     
       {
       path : "/", element : <App />
     },
  {
    path: "../Specificite",
    element: <Specificite />,
  },
  {
    path: "../Citation",
    element: <Citation />,
  },

   {  path: "../Frise",
    element: <Frise />,
       },
   

]);





const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
