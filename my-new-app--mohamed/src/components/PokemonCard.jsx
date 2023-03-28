
function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  let pokemon = pokemonList[0]

  // function displayPoke(pokemon) {
  //   if (pokemon.imgSrc) {
  //     return <img src={pokemon.imgSrc} alt="" />
  // } else {
  //   return <p>???</p>
  // } }

    return (
    <div>
      <figure className="poke">
        { pokemon.imgSrc ? <img src={pokemon.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}



export default PokemonCard
