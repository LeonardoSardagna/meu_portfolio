import styles from "../../componentes/paginaModelo/modelo.module.css";

export default function Paginamodelo({ titulo, links, tecnologia, texto, children }) {
    return (
        <article className={styles.container}>
            <h2 className={styles.titulo}>{titulo}</h2>

            <div className={styles.paragrafo}>
                {texto}
            </div>

            <div className={styles.tecnologia}>
                <h3 className={styles.subTitulo}>Tecnologias</h3>
                <ul>
                    {tecnologia.map((tec, index) => (
                        <li key={index}>{tec}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.links}>
                <h3 className={styles.subTitulo}>Links</h3>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {children}
        </article>
    );
}
