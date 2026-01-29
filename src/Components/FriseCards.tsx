import type { FriseCards } from "../Types/jeanne_interfaces"

interface Props {
  friseCards: FriseCards
}

export function FriseCards({ friseCards }: Props) {
  return (
    <div className="flex gap-3 pb-1">
      
      {/* Point + Ligne à gauche */}
      <div className="flex flex-col items-center pt-9">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-0.5 h-24 bg-gray-400"></div>
      </div>
      
      {/* Texte à droite */}
      <div>
        <h3 className="text-lg font-bold mb-1">{friseCards.title}</h3>
        <p className="text-sm font-bold">{friseCards.date}</p>
        <p className="text-sm">{friseCards.description}</p>
      </div>

    </div>
  )
}