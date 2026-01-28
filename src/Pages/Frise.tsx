
import { jeanne } from "../data/Jeanne";
import { FriseCards } from "../Components/FriseCards";



export function Frise() {
    
    return (

        <div>
            <p>Frise</p>
            {jeanne.frise.map((fr) => (
                <FriseCards
                
                    key={fr.id}
                    friseCards={fr}
                />
            
               
         
            ))}
        </div>

        )
    
        }



