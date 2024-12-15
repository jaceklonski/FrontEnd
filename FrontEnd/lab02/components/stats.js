import React, { useState, useEffect } from "react";

const PokemonStats = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
    if (!pokemonId) return; 
    const fetchPokemonDetails = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
      const response = await fetch(url);
      const data = await response.json();

      const pokemonDetails = {
        name: data.name,
        img: data.sprites.front_default,
        types: data.types.map((typeInfo) => typeInfo.type.name).join(", "),
        stats: data.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`),
        height: data.height / 10,
        weight: data.weight / 10,
      };

      setPokemon(pokemonDetails);
    };

    fetchPokemonDetails();
  }, [pokemonId]); 
  if (!pokemon) return null; 

  return (
    <div id="informacje" className="pokemon-info">
      <img
        src={pokemon.img}
        alt={`${pokemon.name} sprite`}
        className="pokemon-image"
      />
      <div className="nazwa">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </div>
      <div className="stats">
        <p>Typy:<br />{pokemon.types}</p>
        <p>Statystyki:<br />
          {pokemon.stats.map((stat, index) => (
            <span key={index}>{stat}<br /></span>
          ))}
        </p>
        <p>Wzrost:<br />{pokemon.height} m</p>
        <p>Waga:<br />{pokemon.weight} kg</p>
      </div>
    </div>
  );
};

export default PokemonStats;

