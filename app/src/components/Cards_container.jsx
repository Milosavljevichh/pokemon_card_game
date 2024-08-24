import Card from "./card";
import { useEffect, useState } from "react";

const pokemons = ['ditto', 'articuno', 'mew', 'mewtwo', 'pikachu', 'snorlax', 'ekans', 'abra', 'golduck', 'gyarados', 'onix', 'bulbasaur'];
const apiKey = import.meta.env.VITE_API_KEY;

function Card_container({ incrementScore, addSelectedPokemon }) {
    const [pokemonUrls, setPokemonUrls] = useState([]);

    // Fetch images from the API
    async function convertData() {
        let newPkmnData = [];
        console.log('converting...');
        for (let i = 0; i < pokemons.length; i++) {
            const response = await fetch(apiKey + pokemons[i]);
            const json = await response.json();
            newPkmnData.push(json.sprites.front_default);
        }
        setPokemonUrls(newPkmnData);
    }

    // Randomize cards on click
    function randomizeCards() {
        let copy = [...pokemonUrls]; 
        let randomNum;
        let length = copy.length;

        for (let i = length - 1; i > 0; i--) {
            randomNum = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[randomNum]] = [copy[randomNum], copy[i]];
        }

        setPokemonUrls(copy); 
        incrementScore();
    }

    useEffect(() => {
        convertData();
    }, []);

    return (
        <div id="container">
            <div className="row">
                {pokemonUrls.map((url, i) => (
                    <Card 
                        url={url} 
                        key={pokemons[i]} 
                        name={pokemons[i]} 
                        action={randomizeCards} 
                        addSelectedPokemon={addSelectedPokemon} 
                        incrementScore={incrementScore} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Card_container;
