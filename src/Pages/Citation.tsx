import { jeanne } from "../data/Jeanne"; 
import { CitationCard } from "../Components/CitationCards";

export default function Citation() {
    return (
        <div>
            <h2> Citataions de Jeanne d'Arc</h2>
            <div>
                {jeanne.citation.map((cit) => (
                    <CitationCard
                        key={cit.id}
                        citation={cit} />
                 
                    
                    
                 
                ))}
            </div>
        </div>

     
    )
}