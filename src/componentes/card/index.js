import { Link } from "react-router-dom"
import "./card.css"

const Card = ({card}) =>{
    return (
        <Link to={`posts/${card.id}`}>
            <div className="card-descricao">
                <img src={`./assets/posts/${card.id}/capa.png`} alt="Capa de fundo"></img>
                <h2>{card.titulo}</h2>
                <button>Ler</button>
            </div>
        </Link>
    )
}

export default Card