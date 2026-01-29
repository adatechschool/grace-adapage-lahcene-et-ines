import { jeanne } from "../data/Jeanne";
import { FriseCards } from "../Components/FriseCards";

export function Frise() {
  return (
    <div className="flex justify-center p-6">
      <div className="w-96">
        <h2 className="text-2xl font-bold mb-8">Frise</h2>
        
        {jeanne.frise.map((fr) => (
          <FriseCards key={fr.id} friseCards={fr} />
        ))}
      </div>
    </div>
  )
}