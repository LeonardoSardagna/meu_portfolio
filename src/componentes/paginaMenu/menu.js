import { Link } from "react-router-dom"
import styles from "./menu.module.css"

export default function MenuPrincipal(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.navegacao_link} to="/">
                    Inicio
                </Link>
            </nav>
        </header>
    )
}
