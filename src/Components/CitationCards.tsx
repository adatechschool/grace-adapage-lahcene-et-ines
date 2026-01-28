import type { Citation } from "../Types/jeanne_interfaces";

interface Props {
  citation: Citation;
}

export function CitationCard({ citation }: Props) {
  return (
    <blockquote className="citation-card">
      <p>“{citation.text}”</p>

        {citation.context}

    </blockquote>
  );
}
