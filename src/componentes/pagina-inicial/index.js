import Card from "../card"
import styles from "./paginaInicial.module.css"
import card from "/Users/leona/OneDrive/Documentos/alura_estudo/Portfolio_Projetos/meu-portfolio/src/json/projeto.json"


export default function PaginaInicial (){
    return(
        <ul className={styles.card_ul}>
            {card.map((card) =>(
                <li key={card.id}><Card card={card}/></li>
            ))}
        </ul>
    )
}