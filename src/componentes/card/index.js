import "./card.css"

const Card = ({card}) =>{
    return (
        <div className="card-descricao">
            <img src={`./assets/posts/${card.id}/capa.png`} alt="Capa de fundo"></img>
            <h2>{card.titulo}</h2>
            <button>Ler</button>
        </div>
    )
}

export default Card