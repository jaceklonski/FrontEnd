// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import SearchBar from './SearchBar.js';
// import DivOne from './DivOne.js';
// import DivTwo from './DivTwo.js';

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const App = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <SearchBar />

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//         <DivOne />
//         <DivTwo />
//       </div>
//     </div>
//   );
// };

// root.render(<App />);

// async function fetchPokemonData() {
//   const pokemonList = [];
  
//   for (let i = 1; i <= 20; i++) {
//       const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
//       const response = await fetch(url);
//       const data = await response.json();
      
//       const pokemon = {
//           name: data.name,
//           id: data.id,
//       };
      
//       pokemonList.push(pokemon);
//   }

//   const wait = (x) => {
//     const lista = x.map((pokemon) => {
//       const textContent = `${pokemon.id}. ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
//       return <div key={pokemon.id}>{textContent}</div>})

//     return <div>{lista}</div>;}

//   return Promise.all(pokemonList).then((values) => {
//     return wait(values)
//   })
// }



const DivOne = () => {
  return (
  <h1>Hello in JSX</h1>
  );
};

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="searchbar"
      style={{
        marginBottom: "20px",
        padding: "10px",
        fontSize: "16px",
      }}
    />
  );
};

const DivTwo = () => {
  return (
    <div>
      Div 2
    </div>
  );
};

function HelloJSX () {
  return (
    <div>
      <SearchBar />
      <DivOne />
      <DivTwo />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HelloJSX/>);

console.log(fetchPokemonData())