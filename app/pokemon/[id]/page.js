export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch Pokémon data');
  }

  const pokemon = await res.json();

  const name = pokemon?.name;
  const abilities = pokemon?.abilities;

  return (
    <>
      <style>{`
        .pokemon-container {
          display:flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .name {
          text-transform: uppercase;
          color: #fff;
          font-size: 40px;
          font-weight: 600;
        }
        .ability-container {
          display:flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .ability-name {
          text-transform: uppercase;
          background-color: #313131;
          padding: 10px;
          border-radius: 9px;
          font-size: 20px;
          color: grey;
        }
      `}</style>
      <div className="pokemon-container">
        <div className="name">{name}</div>
        <div className="ability-container"> 
          {abilities?.map((ability, index) => (
            <div key={index} className="ability-name">{ability?.ability?.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}
