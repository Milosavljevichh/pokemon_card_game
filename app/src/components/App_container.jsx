import '../styles/staticModel.css'
import Header from './Header'
import Card_container from './Cards_container'
import { useState } from 'react'

function AppContainer() {

    //keep track of the score
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setbestScore] = useState(0)
    //keep track of already selected pokemons
    const [selectedPokemons, setSelectedPokemons] = useState([])

    function addSelectedPokemon(pokemon) {
        let result = selectedPokemons.filter((word) => word == pokemon);
        if (result.length) {resetScore()}
         else {
            let newArr = selectedPokemons.slice()
            newArr.push(pokemon)
            setSelectedPokemons(newArr)
        }
    }

    //functions for manipulating the score
    function incrementScore() {
        setCurrentScore(currentScore + 1)
    }

    function resetScore() {
        setCurrentScore(0)
        setSelectedPokemons([])
    }

    if (currentScore > bestScore) setbestScore(currentScore)

    return (
        <>    
            <Header currentScore={currentScore} bestScore={bestScore} />
            <Card_container incrementScore={incrementScore} addSelectedPokemon={addSelectedPokemon} />
        </>
    )
}

export default AppContainer;