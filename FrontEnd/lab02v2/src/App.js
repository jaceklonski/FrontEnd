const root = ReactDOM.createRoot(document.getElementById("root"))
const searchInput = document.querySelector("[data-search]")

async function fetchPokemonData(searchphrase = '') { 
	const url = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000`;
	const response = await fetch(url);
	const data = await response.json();
	const selected = data.results.filter((element) => element.name.includes(searchphrase));
	const pokedata = selected.slice(0,20)

	const promises = pokedata.map(
		async (pokemon) => {
			const resp = await fetch(pokemon.url)
			const data = await resp.json()
			
			const pokemonek = {
        			name: data.name,
        			id: data.id,
	       };

			return pokemonek
		}
	)

	const do_formatowania = await Promise.all(promises)

	return do_formatowania
}


function jsx_divs(lista, selectedPokemon) {
	return (
		<>
			<div>
				{lista.map((element) => (
					<div
					key={element.id}
					onClick={() => handleClick(element.id)}
					>
            					{element.id}. {element.name}
					</div>
				))}
			</div>

		{selectedPokemon && (
			<div>
	  			<img src={selectedPokemon.img} alt={selectedPokemon.name} />
          			<h3>{selectedPokemon.name}</h3>
          			<p>ID: {selectedPokemon.id}</p>
          			<p>Types: {selectedPokemon.types}</p>
          			<p>Stats: {selectedPokemon.stats}</p>
          			<p>Height: {selectedPokemon.height} m</p>
          			<p>Weight: {selectedPokemon.weight} kg</p>
        		</div>
		)}
		</>
	);

	async function handleClick(id) {
		console.log(`Pokemon clicked: ${id}`);
		const pokemon = await pokemonFromID(id);
		console.log(pokemon);
		setSelectedPokemon(pokemon);
	}
}



function setSelectedPokemon(pokemon) {
	selectedPokemon = pokemon;
	search()
}



function render_lista(lista, selectedPokemon) {
	root.render(
		jsx_divs(lista, selectedPokemon)
	);
}



function search(phrase) {
	fetchPokemonData(phrase).then((pokemonData) => {
	render_lista(pokemonData, selectedPokemon)
	console.log("done")
});
}



async function pokemonFromID(id){
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const response = await fetch(url);
	const data = await response.json();

	const pokemonek = {
        			name: data.name,
        			id: data.id,
				types: data.types.map(typeInfo => typeInfo.type.name).join(", "),
				stats: data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(", "),
				height: data.height/10,
				weight: data.weight/10,
				img: data.sprites.front_default,
	       };
	return pokemonek
}

//Start


let selectedPokemon = null;

search()
searchInput.addEventListener("input", (x) => {search(x.target.value)})
