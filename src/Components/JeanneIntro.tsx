

interface Props {
  name: string;
    image: string;
    description : string
}

export function JeanneIntro ({ name, image, description }: Props) {
  return (
    <header>
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiZ4HqvKzwO-_G7UU8cEz8FPYEj_kKYDqpA&s)` }}
        ></div>
      <h1>{name}</h1>

      <img
        src={image}
        alt={name}
    
          />
          
           <p>
      {description}
    </p>
    </header>
  );
}