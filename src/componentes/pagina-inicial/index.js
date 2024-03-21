import Card from "../card"
import styles from "./paginaInicial.module.css"
import card from "../../json/projeto.json"


export default function PaginaInicial (){
    return(
        <ul className={styles.card_ul}>
            {card.map((card) =>(
                <li key={card.id}><Card card={card}/></li>
            ))}
        </ul>
    )
}