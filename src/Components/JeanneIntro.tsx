interface Props {
  name: string;
  image: string;
  description: string;
}

export function JeanneIntro({ name, image, description }: Props) {
  return (
    <section className="relative min-h-screen w-full pt-[16rem]">
      
      {/* Background global */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)",
        }}
      />

      {/* Contenu */}
      <div className="max-w-screen-xl mx-auto px-16">
        <div className="flex items-start gap-14">

          {/* Image */}
          <div className="w-[40%]">
            <img
              src={image}
              alt={name}
              className="w-full rounded-lg border-8 border-amber-800 shadow-2xl"
            />
          </div>

          {/* Texte */}
          <div className="w-[60%] bg-amber-50 bg-opacity-95 border-8 border-amber-800 rounded-lg p-14 shadow-2xl">
            <p className="text-3xl leading-relaxed text-amber-950 font-serif
              first-letter:text-7xl first-letter:font-bold first-letter:text-amber-800
              first-letter:float-left first-letter:mr-4">
              {description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
