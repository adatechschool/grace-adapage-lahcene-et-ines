import type { FriseCards } from "../Types/jeanne_interfaces"

interface Props {
  friseCards: FriseCards
}

export function FriseCards({friseCards}: Props) {
  return (
     <section className="bg-gray-200 min-h-screen flex justify-center p-8">
  <div className="w-80">
    <h2 className="text-xl text-gray-700 mb-7">
      {friseCards.title}
    </h2>
    {/* Container avec le trait continu */}
    <ul className="relative border-l-2 border-gray-400 ml-2 ">
      <li className="relative list-none pb-3 pl-8 flex justify-start">
        {/* Cercle aligné avec le titre */}
        <div className=" flex justify-start  top-0 w-4 h-4 bg-gray-400 rounded-full"></div>
        {/* Contenu */}
        <div className="text-sm text-gray-600">
          <p className="font-semibold">{friseCards.date}</p>
          <p className="mt-2">{friseCards.description}</p>
        </div>
      </li>
     
    </ul>
  </div>
</section>



  )
}