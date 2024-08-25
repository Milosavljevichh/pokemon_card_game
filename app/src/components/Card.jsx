function Card({url,  name, action, addSelectedPokemon, incrementScore}) {

    function callFunctions() {
        incrementScore()
        action()
        addSelectedPokemon(url)
    }

    return (
        <div className="card" onClick={callFunctions}>
            <img src={url} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Card;