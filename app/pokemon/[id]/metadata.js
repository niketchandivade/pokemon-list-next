export async function generateMetadata({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  return {
    title: pokemon.name,
  };
}
