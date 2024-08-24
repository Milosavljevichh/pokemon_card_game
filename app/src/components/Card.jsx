import { useState } from "react";

function Card({url, action, addSelectedPokemon}) {

    function johnDoe() {
        action()
        addSelectedPokemon(url)
    }

    return (
        <div className="card" onClick={johnDoe}>
            <img src={url} alt="" />
            <p>Cat 1</p>
        </div>
    )
}

export default Card;