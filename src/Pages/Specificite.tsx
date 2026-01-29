import { jeanne } from "../data/Jeanne";
import { SpecificiteCards } from "../Components/SpecificiteCards";

export default function Specificite() {
  return (
    <div className="p-10 m-10">
      <h2 className=" text-5xl font-bold  text-center mb-20">Spécificités de Jeanne d'Arc</h2>

    
      <SpecificiteCards speci={jeanne.specificite} />
    </div>
  );
}
