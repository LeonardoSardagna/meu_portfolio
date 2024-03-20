import styles from "../../componentes/paginaModelo/modelo.module.css"

export default function Paginamodelo({titulo, children}){
    return(
        <article className={styles.container}>
            <div
            className={styles.fotoCapa}
            ></div>
            <h2 className={styles.titulo}>{titulo}</h2>
            <div className={styles.paragrafo}>{children}</div>
        </article>
    )
}
