import Link from 'next/link';
import PokemonDetails from './PokeDetails';


export default function Fetch({ poke = [], query = "", limit = 20, type = "", sort = "", view = ""}) {


    const filter = (pokemons, searchPhrase = "") => {
        return pokemons.filter(el => el.name.toLowerCase().includes(searchPhrase.toLowerCase()));
    };

    const buildUrl = (id, { view, query, limit, type, sort }) => {
        let path = `/pokemon/${id}`;
        const params = new URLSearchParams();

        if (view) params.set("view", view);
        if (limit && limit !== 20) params.set("limit", limit);
        if (query) params.set("search", query);
        if (type) params.set("type", type);
        if (sort) params.set("sort", sort);

        return params.toString() ? `${path}?${params.toString()}` : path;
    };

    const getList = (list) => {
        if (!Array.isArray(list)) return <p>No pokemons to display</p>;
        if (list.length === 0) return <h2 className="no_match">No matching pokemons</h2>;

        return list.map((pokemon, index) => {
            const parts = pokemon.url.split("/");
            const id = parts[parts.length - 2];
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            const route = buildUrl(id, { view, query, limit, type, sort });
            
            if(view === "stats"){
                return (
                    <div key={index} className="pokemonCard">
                            <PokemonDetails id={id}/>
                    </div>)}
            else{
                return (
                    <div key={index} className="pokemonCard">
                        <p>{pokemon.name} #{id}</p>
                        <Link href={route} preload={"false"}>
                            <img src={imageUrl} alt={pokemon.name} className="pokemonImg" />
                        </Link>
                    </div>
            );}
        });
    };

    if (sort === "name" || sort === "name-reverse") {
        poke.sort((a, b) => a.name.localeCompare(b.name));
        if (sort === "name-reverse") poke.reverse();
    } else if (sort === "id" || sort === "id-reverse") {
        poke.sort((a, b) => {
            const id1 = parseInt(a.url.split("/").slice(-2, -1)[0]);
            const id2 = parseInt(b.url.split("/").slice(-2, -1)[0]);
            return id1 - id2;
        });
        if (sort === "id-reverse") poke.reverse();
    }

    const filteredPokemons = filter(poke, query).slice(0, limit);

    return (
        <div id="pokemonList">
            {getList(filteredPokemons)}
        </div>
    );
}
