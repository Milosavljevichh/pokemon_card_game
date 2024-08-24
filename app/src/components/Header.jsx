import Scoreboard from "./scoreboard";

function Header({currentScore, bestScore}) {
    return(
        <div id="header">
            <div>
                <h1>Memorize Cats</h1>
                <h4>Click on a picture, without clicking the same image twice</h4>
            </div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore} />
        </div>
    )
}

export default Header;