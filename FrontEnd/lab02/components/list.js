import React, { useState, useEffect } from "react";
import PokemonStats from "./PokemonStats";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);

  // Funkcja do pobierania listy Pokémonów
  useEffect(() => {
    const fetchPokemonData = async () => {
      const fetchedPokemon = [];
      for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const response = await fetch(url);
        const data = await response.json();

        const pokemon = {
          name: data.name,
          id: data.id,
        };

        fetchedPokemon.push(pokemon);
      }
      setPokemonList(fetchedPokemon);
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <div id="pokemon-container">
        {pokemonList.map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemon"
            onClick={() => setSelectedPokemonId(pokemon.id)}
          >
            {`${pokemon.id}. ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`}
          </div>
        ))}
      </div>

      {/* Komponent wyświetlający szczegóły Pokémona */}
      <PokemonStats pokemonId={selectedPokemonId} />
    </div>
  );
};

export default PokemonList;

