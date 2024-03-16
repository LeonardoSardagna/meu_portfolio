import Banner from "../banner"
import Card from "../card"
import "./paginaInicial.css"
import card from "/Users/leona/OneDrive/Documentos/alura_estudo/Portfolio_Projetos/meu-portfolio/src/json/projeto.json"


const PaginaInicial = () =>{
    return(
        <main>
            <Banner/>
            <ul className="card-ul">
                {card.map((card) =>(
                    <li key={card.id}><Card card={card}/></li>
                ))}
            </ul>
        </main>
    )
}

export default PaginaInicial