import { Link } from "react-router-dom"
import styles from "../../componentes/card/card.module.css"

export default function Card({card}){
    return (
        <Link to={`/posts/${card.id}`}>
            <div className={styles.card_descricao}>
                <img src={`/assets/posts/${card.id}/capa.png`} alt="Capa de fundo"></img>
                <h3>{card.titulo}</h3>
                <button>Ler</button>
            </div>
        </Link>
    )
}