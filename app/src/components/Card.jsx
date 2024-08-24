import { useState } from "react";

function Card({url,  name, action, addSelectedPokemon, incrementScore}) {

    function johnDoe() {
        incrementScore()
        action()
        addSelectedPokemon(url)
    }

    return (
        <div className="card" onClick={johnDoe}>
            <img src={url} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Card;