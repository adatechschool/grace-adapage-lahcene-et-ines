import type { Jeanne } from "../Types/jeanne_interfaces";

export const jeanne: Jeanne = {
    name: "Jeanne d'Arc",
    description : `À seulement 17 ans, elle rencontre le dauphin Charles (futur Charles VII) et réussit à le convaincre de lui confier une armée. Elle mène les troupes françaises à plusieurs victoires importantes, notamment la libération d’Orléans en 1429, ce qui redonne espoir au peuple français. Grâce à elle, Charles VII est sacré roi à Reims.
          En 1430, Jeanne est capturée par les Bourguignons, alliés des Anglais. Elle est jugée pour hérésie et condamnée à mort. Elle est brûlée vive à Rouen en 1431, à l’âge de 19 ans.
          Plus tard, en 1456, son procès est révisé et elle est déclarée innocente. Jeanne d’Arc devient un symbole de courage et de foi, et elle est canonisée sainte en 1920.`,
    
    image: "https://www.imagesdoc.com/wp-content/uploads/sites/33/2018/10/WOA_IMAGE_1.jpg",
    specificite: [{
        id: 1,
        nationalite: "Française",
        metier: "Guerrière",
        signeAstro: "Capricorne",
        qualite: "Courageuse"
    }],

    citation: [{
      id: 1,
      text: "Je suis venue pour délivrer mon pays",
      context: `Cette phrase exprime son rôle et sa mission selon sa foi : elle se considérait envoyée par Dieu pour libérer la France de l’occupation anglaise pendant la guerre de Cent Ans.
Jeanne d’Arc voyait sa vie comme un appel divin. Elle n’agissait pas par ambition personnelle, mais par devoir et patriotisme. Cette citation montre son courage et sa détermination à protéger son pays, même face au danger et à la mort.`,
      image : "https://citeroyaleloches.fr/wp-content/uploads/2018/05/jeanne_darc.jpg",
    },

      {
        id: 2,
        text: `Portez secours à ceux qui sont opprimés et n’ayez crainte de vos ennemis.`,
        context: `Cette citation de Jeanne d’Arc signifie que nous devons aider les personnes qui souffrent ou qui sont injustement traitées, sans hésiter à agir par peur de ceux qui pourraient nous nuire.
         Jeanne d’Arc encourage le courage et la justice. Elle nous rappelle qu’il faut défendre les opprimés et ne pas se laisser intimider par les ennemis, même puissants. Cette phrase reflète sa force morale et sa foi : pour elle, faire ce qui est juste vaut plus que craindre les conséquences.`,
        image: "",
      }],
   frise: [{
    id: 1,
    date: "6 janvier 1412",
    title: "Naissance",
    description: "Naissance à Domrémy",
       },
  
       {
    id: 2,
    date : "1425",
    title: "Premières voix",
    description: "Jeanne affirme entendre des voix lui demandant de libérer la France.",
  },
  {
    id: 3,
    date : "8 mai 1429",
    title: "Libération d’Orléans",
    description: "Victoire décisive contre les Anglais",
       },
  {
    id: 4,
    date: "23 mai 1430",
    title: "Capture à Compiègne",
    description: "Jeanne est capturée par les Bourguignons lors d’une attaque.",
  },
  {
    id: 8,
 
    date: "30 mai 1431",
    title: "Procès et condamnation",
    description: "Jeanne est jugée à Rouen pour hérésie et sorcellerie.",
  },
  {
    id: 9,
    date: "30 mai 1431",
    title: "Exécution",
    description: "Jeanne d’Arc est brûlée vive sur la place du Vieux-Marché à Rouen.",
  },
  {
    id: 10,
    date: "1456",
    title: "Réhabilitation",
    description: "Le pape Calixte III annule le verdict de condamnation de Jeanne.",
        }],  
}
