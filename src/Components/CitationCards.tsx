import type { Citation } from "../Types/jeanne_interfaces";

interface Props {
  citation: Citation;
}

export function CitationCard({ citation }: Props) {
  return (

    <div >
      
      <div>
        <img src={citation.image} className="w-full max-w-[300px] mx-auto mb-4 rounded-lg object-cover"
 />
      </div>
    <div className="bg-white p-6 rounded-lg">

    <blockquote className="relative max-w-xl mx-auto bg-white p-6 pt-10 rounded-xl shadow-lg text-center">
      <p>“{citation.text}”</p>

       
        
      <p>{citation.context}</p> 
        
    </blockquote>
  
</div>
   </div>

    
  );
}
