import '../styles/staticModel.css'
import Header from './header'
import Card_container from './cards_container'
import { useState } from 'react'

function AppContainer() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setbestScore] = useState(0)
    const [selectedPokemons, setSelectedPokemons] = useState([])

    //keep track of selected pokemons
    function addSelectedPokemon(pokemon) {
        let newArr = selectedPokemons.slice()
        newArr.push(pokemon)
        setSelectedPokemons(newArr)
        let result = selectedPokemons.filter((word) => word == pokemon);
        console.log(pokemon)
        console.log(selectedPokemons)
        // if (result.length) console.log(result)
    }

    function incrementScore() {
        setCurrentScore(currentScore + 1)
    }

    function resetScore() {
        setCurrentScore(0)
    }

    if (currentScore > bestScore) setbestScore(currentScore)

    return (
        <>    
            <Header currentScore={currentScore} bestScore={bestScore} />
            <Card_container incrementScore={incrementScore} resetScore={resetScore} addSelectedPokemon={addSelectedPokemon} />
        </>
    )
}

export default AppContainer;