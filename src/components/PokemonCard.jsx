import React from 'react'

const PokemonCard = ({ pokemon }) => {
  return (
    <article className='card'>
      <img className='card_img' src={pokemon?.sprites.other.dream_world.front_default} alt="" />
      <h2 className='card_name'>NamePokemon: {pokemon?.name}</h2>
    </article>
  )
}

export default PokemonCard