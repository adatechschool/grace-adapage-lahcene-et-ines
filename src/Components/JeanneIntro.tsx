

interface Props {
  name: string;
    image: string;
    description : string
}

export function JeanneIntro ({ name, image, description }: Props) {
  return (
    <header>
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