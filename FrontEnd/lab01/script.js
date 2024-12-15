async function fetchPokemonData() {
    const pokemonList = [];
    
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const response = await fetch(url);
        const data = await response.json();
        
        const pokemon = {
            name: data.name,
            id: data.id,
        };
        
        pokemonList.push(pokemon);
    }
    
    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonList.forEach(pokemon => {
        const pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon");
        pokemonDiv.textContent = `${pokemon.id}. ${pokemon.name}`;
        
        pokemonDiv.addEventListener("click", function() {
            display_stats(pokemon.id);
        });

        pokemonContainer.appendChild(pokemonDiv);
    });
}


async function display_stats(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const response = await fetch(url);
    const data = await response.json();

    const img = data.sprites.front_default
    const types = data.types.map(typeInfo => typeInfo.type.name).join(", ");
    const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(",<br>");
    const height = data.height / 10;
    const weight = data.weight / 10;
    const name = data.name

    const pokemonInfo = `
        <p>Typy:<br>
        ${types}</p>
        <p>Statystyki:<br>
        ${stats}</p>
        <p>Wzrost:<br>${height} m</p>
        <p>Waga:<br>${weight} kg</p>
    `;

    const pokemon_info = document.getElementById("informacje")
    pokemon_info.innerHTML = ""

    const pokemonImage = document.createElement("img");
        pokemonImage.src = img;
        pokemonImage.alt = "pokemon-image";
    pokemonImage.classList.add("pokemon-image")
    pokemon_info.appendChild(pokemonImage)

    const poke_name = document.createElement("div");
    poke_name.classList.add("nazwa")
    poke_name.textContent = data.name
    pokemon_info.appendChild(poke_name)
    

    const infoContainer = document.createElement('div');
    infoContainer.classList.add("stats")
    infoContainer.innerHTML = pokemonInfo;
    pokemon_info.appendChild(infoContainer);
}

fetchPokemonData();
