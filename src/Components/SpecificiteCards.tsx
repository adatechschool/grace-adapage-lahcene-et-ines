import type { Specificite } from "../Types/jeanne_interfaces";

interface Props {
  specificite: Specificite;
}

export function SpecificiteCard({ specificite }: Props) {
  return (
    <div className="specificite-card">
    <h3>{specificite.metier}</h3>
    <h3>{specificite.nationalite}</h3>
    <h3>{specificite.signeAstro}</h3>
    <h3>{specificite.qualite}</h3>
    </div>
  );
}
