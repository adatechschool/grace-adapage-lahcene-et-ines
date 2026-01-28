import type { FriseCards } from "../Types/jeanne_interfaces"

interface Props {
  friseCards: FriseCards
  isLast?: boolean
}

export function FriseCards({ friseCards, isLast = false }: Props) {
  return (
    <li className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-gray-400 rounded-full flex-shrink-0"></div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[100px] bg-gray-400 mt-1"></div>
        )}
      </div>
      <div className="flex-1 pb-10">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-gray-700">
            {friseCards.title}
          </h3>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">
            {friseCards.date}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-sm text-gray-600 leading-tight">
            {friseCards.description}
          </p>
        </div>
      </div>
    </li>
  )
}