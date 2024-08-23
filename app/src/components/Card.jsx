
function Card({url, action}) {

    return (
        <div className="card" onClick={action}>
            <img src={url} alt="" />
            <p>Cat 1</p>
        </div>
    )
}

export default Card;