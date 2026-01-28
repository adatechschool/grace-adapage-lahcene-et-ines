export interface Citation {
    id: number;
    text: string;
    context: string;

}

export interface Evenement {
    id: number;
    date: string;
    title: string; 
    description: string; 
}

export interface Specificite {
    id: number; 
    nationalite: string;
    metier: string;
    signeAstro: string;
    qualite: string;
  
}

export interface Jeanne {
    name: string;
    description: string;
    image: string;
    specificite: Specificite[];
    citation: Citation[];
    frise: Evenement[];
}