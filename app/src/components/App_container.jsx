import '../styles/staticModel.css'
import Header from './header'
import Card_container from './cards_container'
import { useState } from 'react'

function AppContainer() {

    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setbestScore] = useState(0)

    function incrementScore() {
        setCurrentScore(currentScore + 1)
    }

    if (currentScore > bestScore) setbestScore(currentScore)

    return (
        <>    
            <Header currentScore={currentScore} bestScore={bestScore} />
            <Card_container incrementScore={incrementScore} />
        </>
    )
}

export default AppContainer;