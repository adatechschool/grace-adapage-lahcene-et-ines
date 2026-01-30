import type { Citation } from "../Types/jeanne_interfaces";

interface Props {
  citation: Citation;
}

export function CitationCard({ citation }: Props) {
  return (

    <div >
      
    <div
  className="fixed inset-0 bg-cover bg-center opacity-40 -z-10"
  style={{
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)",
  }}
/>

      <div>
        <img src={citation.image} className="w-full max-w-[300px] mx-auto mb-4 rounded-lg object-cover"
 />
      </div>
    <div>

    <blockquote className="relative max-w-xl mx-auto bg-white p-6 pt-10 rounded-xl shadow-lg text-center">
      <p>“{citation.text}”</p>

       
        
      <p>{citation.context}</p> 
        
    </blockquote>
  
</div>
   </div>

    
  );
}
