
import AddToFavs from "./addToFav"

export default async function PokemonDetails ({id}){
    
    const getPokemonDetails = async (id) => {
        try{
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            const json = await res.json()
            return json
        }
        catch (error){
            console.log(error)
        }
    }
    
    const pokemonDetails = await getPokemonDetails(id)
    
    const {name, sprites: {front_default}, types, weight, height, stats, heart = "false"} = pokemonDetails;

    return <div id="detailContainer">
        <div id="pokemonImageBox">
            <p>{name} #{id}</p>
            <img src={front_default}></img>
            <AddToFavs id = {id}/>
        </div>

        <div id="pokemonDetailBox">
            <p><strong>Types: </strong>{types.map(el => el.type.name).join(', ')}</p>
            <p><strong>Height: </strong>{height}</p>
            <p><strong>Weight: </strong>{weight}</p>
            {stats.map(el => 
                <p key={el.stat.name}>
                    <strong>{el.stat.name}: </strong>{el.base_stat}
                </p>
            )}
        </div>
    </div>
}