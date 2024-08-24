function Scoreboard({currentScore, bestScore}) {
    return (
        <div  id="scoreboard">
            <h2>Score: {currentScore}</h2>
            <h2>Best-score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;