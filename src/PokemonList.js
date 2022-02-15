import React from 'react';

export default function PokemonList({ pokemon }) {
  return (
    <div className='pokemon'>
      {
        pokemon.map((monster, i) => <div className='poke-item' key={`${monster.pokemon}-${i}`}>
          <p>{monster.pokemon}</p>
          <p>{monster.type_1}</p>
          <img src={monster.url_image} />
        </div>)
      }
    </div>
  );
}
