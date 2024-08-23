import Scoreboard from "./scoreboard";

function Header() {
    return(
        <div id="header">
            <div>
                <h1>Memorize Cats</h1>
                <h4>Click on a picture, without clicking the same image twice</h4>
            </div>
            <Scoreboard />
        </div>
    )
}

export default Header;