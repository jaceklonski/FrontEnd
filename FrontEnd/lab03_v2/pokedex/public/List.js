export const getPokemonList = async (limit = 20) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
        
        const json = await res.json();
        return json.results;

    } catch (error) {
        console.error("Error in getPokemonList:", error);
        return [];
    }
};

export const getPokemonListByType = async (type) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);

        if (!res.ok) {
            throw new Error(`Error fetching data: ${res.statusText}`);
        }
        
        const json = await res.json();
        
        return json.pokemon ? json.pokemon.map(el => el.pokemon) : [];
    } catch (error) {
        console.error(`Error in getPokemonListByType for type ${type}:`, error);
    }
};
