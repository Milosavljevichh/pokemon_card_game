import Card from "./card";
import { useEffect } from "react"
import { useState } from "react";
const pokemons = ['ditto', 'articuno', 'mew', 'mewtwo', 'pikachu', 'snorlax', 'ekans', 'abra', 'golduck', 'gyarados', 'onix', 'bulbasaur']
const apiKey = import.meta.env.VITE_API_KEY


function Card_container({incrementScore, addSelectedPokemon}) {

    const [pokemonData, setPokemonData] = useState([])
    const [loadedData, setLoadedData] = useState(false)

    //get images from the API
    async function convertData() {
        let newPkmnData = []
        for (let i = 0; i<pokemons.length;i++){

            const response = await fetch(apiKey + pokemons[i]);
            
            const json = await response.json();
            newPkmnData.push(json.sprites.front_default)
        }
        setPokemonData(newPkmnData)
    }

    //randomize cards on click
    function randomizeCards() {
        incrementScore()
        let newData = []
        let randomNum = 0;
        let n = pokemonData.length
        for (let i=0; i<n;i++){
            randomNum = Math.floor(Math.random() * pokemonData.length);
            let newPkmn = pokemonData.slice(randomNum, randomNum + 1)
            pokemonData.splice(randomNum, 1);
            newData.push(newPkmn)
        }
        setPokemonData(newData)
    }

    //load images
    useEffect(() => {
        if (!loadedData){convertData(), setLoadedData(true)}
    }, [pokemonData])

    return (
        <div id="container">
            <div className="row">
                <Card url={pokemonData[0]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[1]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[2]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[3]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[4]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[5]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
            </div>
            <div className="row">
                <Card url={pokemonData[6]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[7]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[8]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[9]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[10]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
                <Card url={pokemonData[11]} action={randomizeCards} addSelectedPokemon={addSelectedPokemon} />
            </div>
        </div>
    )
}

export default Card_container;