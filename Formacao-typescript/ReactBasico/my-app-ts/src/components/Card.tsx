interface ICard {
    id: number
}

export const Card = ({id} : ICard) => {
    console.log(id)
    return(
        <div>
            <h1>Card {id}</h1>
            <p>Paragrafos</p>
            <p>Details about card</p>
        </div>
    )
}
