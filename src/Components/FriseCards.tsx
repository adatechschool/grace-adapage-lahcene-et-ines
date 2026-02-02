import type { FriseCards } from "../Types/jeanne_interfaces";

interface Props {
  friseCards: FriseCards;
}

export function FriseCards({ friseCards }: Props) {
  return (
    <div className="flex justify-center p-6">
       <div
        className="fixed inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)",
        }}
      />

      {/* Rectangle blanc qui contient la frise */}
      <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-6 w-full max-w-3xl transition-transform duration-300 hover:scale-105">
        
        {/* La frise */}
        <div className="flex gap-6 items-start">
          {/* Point + Ligne */}
          <div className="flex flex-col items-center pt-2">
            <div className="w-4 h-4 bg-amber-900 rounded-full border-2 border-amber-900"></div>
            <div className="w-1 h-32 bg-amber-950"></div>
          </div>

          {/* Texte */}
          <div>
            <h3 className="text-lg font-bold mb-1">{friseCards.title}</h3>
            <p className="text-sm font-semibold mb-2">{friseCards.date}</p>
            <p className="text-sm text-amber-900">{friseCards.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
}