import styles from "./rodape.module.css"

export default function Rodape(){
    return(
        <div className={styles.rodape}>
            <p>Desenvolvido por <a href="https://github.com/LeonardoSardagna"><strong>Leonardo</strong></a></p>
        </div>
    )
}