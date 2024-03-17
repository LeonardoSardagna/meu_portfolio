import "./modelo.css"

export default function Paginamodelo({titulo, children}){
    return(
        <article className="container">
            <h2 className="titulo">{titulo}</h2>
            <div className="paragrafo">{children}</div>
        </article>
    )
}
