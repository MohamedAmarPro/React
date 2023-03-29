import PokemonCard from "./PokemonCard"
import { useState } from "react";

 function NavBar({pokemonList}) {

  const [pokeToDisplay,setPokeToDisplay] = useState(pokemonList[0])

  const handleClick = (pokemon) => {
    setPokeToDisplay(pokemon)

    if (pokemon.name === "pikachu" ) {
      alert("PIKAKACHU")
    }
  }



  return (
    <div>
      {pokemonList.map((pokemon) =>
        <button key={pokemon.name} onClick= {()=> handleClick(pokemon)}>{pokemon.name}</button>
      )}
      {pokeToDisplay ? <PokemonCard data={pokeToDisplay}/> : 'pick a pokemon'}
    </div>
)}

export default NavBar
