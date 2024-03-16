import { Link, useLocation } from "react-router-dom"
import styles from "./links.css"


export default function MenuLink({children, link}){
    const localizacao = useLocation()
    return(
        <Link className={`
            ${styles.navegacao_link} 
            ${localizacao.pathname === link ? styles.navegacao_link_destacado : ""}`} 
            to={link} >
            {children}
        </Link>
    )
}