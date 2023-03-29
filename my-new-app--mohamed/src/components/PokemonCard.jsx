import PropTypes from "prop-types";

function PokemonCard({data}) {


  // function displayPoke(pokemon) {
  //   if (pokemon.imgSrc) {
  //     return <img src={pokemon.imgSrc} alt="" />
  // } else {
  //   return <p>???</p>
  // } }
    return (
    <div>
      <figure className="poke">
        { data.imgSrc ? <img src={data.imgSrc}/> : <p> ??? </p>}
      </figure>
    </div>
  )
}
PokemonCard.propTypes = {
  data: PropTypes.shape({
      name : PropTypes.string.isRequired,
      imgSrc : PropTypes.string,
    }).isRequired,
}




export default PokemonCard
