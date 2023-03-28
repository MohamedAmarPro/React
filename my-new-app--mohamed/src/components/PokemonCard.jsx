
function PokemonCard(data) {



  // function displayPoke(pokemon) {
  //   if (pokemon.imgSrc) {
  //     return <img src={pokemon.imgSrc} alt="" />
  // } else {
  //   return <p>???</p>
  // } }
    return (
    <div>
      <figure className="poke">
        { data.data.imgSrc ? <img src={data.data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}



export default PokemonCard
