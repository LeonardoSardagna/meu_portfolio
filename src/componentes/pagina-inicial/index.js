import Card from "../card"
import styles from "./paginaInicial.module.css"

import Rodape from "../rodape"
import { projetos } from '../../projetos/projeto.ts'

export default function PaginaInicial() {
    return (
        <>
            <main>
                <h2 className={styles.titulo_projetos}>Meus Projetos</h2>
                <div>
                    <ul className={styles.card_ul}>
                        {projetos.map((projetos) => (
                            <li key={projetos.id}><Card card={projetos} /></li>
                        ))}
                    </ul>
                </div>

                <div className={styles.curriculo}>
                    <h2>Currículo</h2>
                    <ul className={styles.curriculo_ul}>
                        <div className={styles.card_descricao}>
                            <img src={`/assets/curriculo/curriculo-pt.png`} alt="Currículo Leonardo em Portugês"></img>
                            <h3>Currículo Português</h3>
                            <button>
                                <a href="/curriculos-pdf/curriculo-LeonardoSardagna-pt.pdf" download>Download PDF</a>
                            </button>
                        </div>

                        <div className={styles.card_descricao}>
                            <img src={`/assets/curriculo/curriculo-en.png`} alt="Currículo Leonardo em Inglês"></img>
                            <h3>Currículo Inglês</h3>
                            <button>
                                <a href="/curriculos-pdf/curriculo-LeonardoSardagna-en.pdf" download >Download PDF</a>
                            </button>
                        </div>
                    </ul>
                </div>
            </main>
            <Rodape />
        </>
    )
}