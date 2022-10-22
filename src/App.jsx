import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = 'http://pokeapi.co/api/v2/pokemon/squirtle'
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1 className="principal-title">PokeApp</h1>
      <PokemonCard
        pokemon={pokemon} />
    </div>
  )
}

export default App
