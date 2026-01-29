import type { Specificite } from "../Types/jeanne_interfaces";

interface Props {
  speci: Specificite[];
}

const card =
  "bg-white rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15),0_-4px_10px_rgba(0,0,0,0.05),4px_0_10px_rgba(0,0,0,0.08),-4px_0_10px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-105";

export function SpecificiteCards({ speci }: Props) {
 
  const spec = speci[0];

  const cardsData = [
    { label: "Métier", value: spec.metier, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPyuPMgBJF1S46LAa80K-tgoG-S3xCHYYZSg&s"},
    { label: "Nationalité", value: spec.nationalite, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwGQ3CV3JJpKGoLqpIH0zfGab7LrNHl0DnQ&s"},
    { label: "Signe astrologique", value: spec.signeAstro, image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrEkg_awU7Mp2bOiitER-1VQiIEudp7n5PoQ&s" },
    { label: "Qualité", value: spec.qualite, image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxLVoP1ciAuD5CXQUSuGoSpvlQlmw_L-cCQ&s" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
      {cardsData.map((item, index) => (
        
        <div key={index} className={`${card} relative flex flex-col items-center text-center`}>

 <div className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-sky-400 opacity-75"></div>
      
         
          <img src={item.image} alt="" className="w-50 h-50 object-contain mb-10" />
          <p className="text-3xl uppercase tracking-wide text-black-500 leading-[8.5] box underline underline-offset-8 bg-white-600 hover:not-focus:bg-gray-50">
            {item.label} 
          </p>
          <p className="text-lg font-semibold text-gray-800 leading-[8.5]">
            {item.value}
          </p>
         
        </div>
      ))}
    </div>
  );
}
