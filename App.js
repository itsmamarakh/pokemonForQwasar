import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonnn, setPokemonnn] = useState({
		name: "",
		species: "",
		img: "",
		attack: "",
		defense: "",
		type: ""
	})

	const fetchPokemon = () => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then((response) => {
			setPokemonnn({
				name: pokemonName,
				species: response.data.species.name,
				img: response.data.sprites.front_default,
				attack: response.data.stats[1].base_stat,
				defense: response.data.stats[2].base_stat,
				type: response.data.types[0].type.name
			});
			console.log(response)
		})
		.catch(() => {
			console.error("Xatolik!")
		})
	}

	return (
		<>
			<h1 className="themeText">Pokemon App</h1>
			<div className="searchArea">
				<input 
					className="search"
					type="text"
					onChange={(event) => {
						setPokemonName(event.target.value);
					}}
				/>
				<button onClick={fetchPokemon}>Search</button>
			</div>

			<div className="resultCard">
				<div className="card">
					<h1>{pokemonnn.name}</h1>
					<img src={pokemonnn.img} />
					<p> Species: {pokemonnn.species}</p>
					<h3>Attack: {pokemonnn.attack}</h3>
					<h4>Defense: {pokemonnn.defense}</h4>
					<p>Type: {pokemonnn.type}</p>
				</div>
			</div>
		</>
	);
};

export default App;