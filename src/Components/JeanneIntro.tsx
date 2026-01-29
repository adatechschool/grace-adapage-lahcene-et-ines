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
<div className="flex gap-4 mb-50 mt-100">
<p className="flex-1 mb-30 text-balance" >{description}</p>
      <img src={image} alt={name} className="w-150" /></div>

</header>
  );
}