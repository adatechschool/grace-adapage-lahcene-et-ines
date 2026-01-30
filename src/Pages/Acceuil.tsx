import { jeanne } from "../data/Jeanne";
import { JeanneIntro } from "../Components/JeanneIntro";
import { NavBar } from "../Components/NavBar";


export default function Acceuil() {
  return (


    <div className="accueil">
      
<NavBar />

      <JeanneIntro
        name={jeanne.name}
        image={jeanne.image}
        description={jeanne.description}

      />


    </div>
  );
}