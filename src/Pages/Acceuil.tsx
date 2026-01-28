import { jeanne } from "../data/Jeanne";
import { JeanneIntro } from "../Components/JeanneIntro";
export default function Accueil() {
  return (
    <div className="accueil">
      <JeanneIntro
        name={jeanne.name}
        image={jeanne.image}
        description={jeanne.description}
      />

      
        
      
    </div>
  );
}