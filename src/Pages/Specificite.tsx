import { jeanne } from "../data/Jeanne";
import { SpecificiteCard } from "../Components/SpecificiteCards";

export default function Specificite() {
  return (
    <div>
      <h2>Spécificités de Jeanne d'Arc</h2>

      <div className="card-container">
        {jeanne.specificite.map((spec) => (
          <SpecificiteCard
            key={spec.id}
            specificite={spec}
          />
        ))}
      </div>
    </div>
  );
}
