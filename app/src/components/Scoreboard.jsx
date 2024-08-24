function Scoreboard({currentScore, bestScore}) {
    return (
        <div>
            <h2>score: {currentScore}</h2>
            <h2>Best-score: {bestScore}</h2>
        </div>
    )
}

export default Scoreboard;