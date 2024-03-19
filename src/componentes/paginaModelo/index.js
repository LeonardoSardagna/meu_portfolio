import styles from "../../componentes/paginaModelo/modelo.css"

export default function Paginamodelo({fotoCapa, titulo, children}){
    return(
        <article className="container">
            <div
            className={styles.fotoCapa}
            style={{backgroundImage: `url(${fotoCapa})`}}
            ></div>
            <h2 className="titulo">{titulo}</h2>
            <div className="paragrafo">{children}</div>
        </article>
    )
}
