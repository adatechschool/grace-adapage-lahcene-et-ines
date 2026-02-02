import type { Specificite } from "../Types/jeanne_interfaces";

interface Props {
  speci: Specificite[];
}

const card =
  "bg-gradient-to-br from-yellow-100 via-amber-200 to-yellow-200 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center p-4";

export function SpecificiteCards({ speci }: Props) {
  const spec = speci[0];

  const cardsData = [
    {
      label: "Métier",
      value: spec.metier,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyuPMgBJF1S46LAa80K-tgoG-S3xCHYYZSg&s",
    },
    {
      label: "Nationalité",
      value: spec.nationalite,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwGQ3CV3JJpKGoLqpIH0zfGab7LrNHl0DnQ&s",
    },
    {
      label: "Signe astrologique",
      value: spec.signeAstro,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEkg_awU7Mp2bOiitER-1VQiIEudp7n5PoQ&s",
    },
    {
      label: "Qualité",
      value: spec.qualite,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxLVoP1ciAuD5CXQUSuGoSpvlQlmw_L-cCQ&s",
    },
  ];

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6">
      {/* Background léger */}
        <div
        className="fixed inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)",
        }}
      />
    

      

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cardsData.map((item, index) => (
          <div key={index} className={card}>
            <img
              src={item.image}
              alt={item.label}
              className="w-32 h-32 object-contain mb-4"
            />
            <p className="text-xl font-semibold uppercase tracking-wide text-black mb-1">
              {item.label}
            </p>
            <p className="text-md text-gray-700">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}