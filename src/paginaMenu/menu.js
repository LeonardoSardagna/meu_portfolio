import { Link } from "react-router-dom"
import "./menu.css"

const MenuPrincipal = () =>{
    
    return(
        <header>
            <nav className="navegacao">
                <Link className="navegacao_link" to="/">
                    Inicio
                </Link>
            </nav>
        </header>
    )
}

export default MenuPrincipal