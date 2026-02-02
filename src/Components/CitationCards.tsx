import type { Citation } from "../Types/jeanne_interfaces";

interface Props {
  citation: Citation;
}

export function CitationCard({ citation }: Props) {
  return (
    <div className="relative w-full flex items-center justify-center gap-6 pt-100">
      {/* Background général */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 -z-10"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)",
        }}
      />

      {/* Bloc citation */}
      <blockquote
        className="relative w-full max-w-3xl bg-gradient-to-br from-yellow-100 via-amber-200 to-yellow-200 p-6 pt-12 rounded-2xl shadow-2xl border-4 border-amber-800 text-center font-serif text-2xl text-amber-900
        before:content-['“'] before:absolute before:-top-6 before:-left-6 before:text-6xl before:text-amber-700
        after:content-['”'] after:absolute after:-bottom-6 after:-right-6 after:text-6xl after:text-amber-700
      "
      >
        <p className="mb-4">{citation.text}</p>
        <p className="text-lg italic text-amber-800">{citation.context}</p>
      </blockquote>
    </div>
  );
}