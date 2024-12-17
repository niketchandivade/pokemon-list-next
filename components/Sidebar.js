'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await res.json();
      setPokemonList(data.results);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      <style>{`
        .list {
          list-style: none;
          display: block;
          padding: 10px;
          background-color: white;
          border: none;
          text-align: left;
          cursor: pointer;
          font-size: 16px;
          border-radius: 5px;
          padding: 15px;
          margin: 10px 0;
          background-color: #313131;
        }
        .ui-list {
          padding-inline-start: 10px;
          padding-inline-end: 10px;
          padding-inline-start: 10px;
          padding-inline-end: 10px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .link{
          text-decoration: none;
          text-transform: uppercase;
          color: grey;
        }
      `}</style>
      <ul className="ui-list">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="list">
            <Link className="link" href={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
