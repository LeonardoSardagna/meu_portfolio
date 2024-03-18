import MenuLink from "../paginaLinks/index.js"
import "./menu.css"

const MenuPrincipal = () =>{
    
    return(
        <header>
            <nav className="navegacao">
                <MenuLink link="/">
                    Início
                </MenuLink>
                <MenuLink link="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default MenuPrincipal