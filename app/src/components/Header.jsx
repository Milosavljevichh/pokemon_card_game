import Scoreboard from "./Scoreboard";

function Header({currentScore, bestScore}) {
    return(
        <div id="header">
            <div id="title">
                <h1>Memorize Pokemon</h1>
                <h4>Click on a picture, without clicking the same picture twice</h4>
            </div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
    )
}

export default Header;