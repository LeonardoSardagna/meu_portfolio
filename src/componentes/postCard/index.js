import { useParams } from "react-router-dom"
import posts from "/Users/leona/OneDrive/Documentos/alura_estudo/Portfolio_Projetos/meu-portfolio/src/json/projeto.json"
import Paginamodelo from "../paginaModelo"
import ReactMarkdown from "react-markdown"
import './postagem.css'

export default function PostCard(){
    const parametro = useParams()
    
    const post = posts.find((post)=>{
        return post.id === Number(parametro.id)
    })

    return(
        <Paginamodelo
        titulo={post.titulo}
        >
        <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
        </div>
        </Paginamodelo>
    )
}