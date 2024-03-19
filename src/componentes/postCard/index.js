import { Route, Routes, useParams } from "react-router-dom"
import posts from "/Users/leona/OneDrive/Documentos/alura_estudo/Portfolio_Projetos/meu-portfolio/src/json/projeto.json"
import Paginamodelo from "../paginaModelo"
import ReactMarkdown from "react-markdown"
import './postagem.css'
import PagNaoEncontrada from "../../paginas/paginanaoEncontrada"
import PaginaPadrao from "../paginaPadrao"


export default function PostCard(){
    const parametro = useParams()
    
    const post = posts.find((post)=>{
        return post.id === Number(parametro.id)
    })

    if(!post){
        return <PagNaoEncontrada/>
    }

    return(
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <Paginamodelo
                    fotoCapa={`./assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                    >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                    </Paginamodelo>
                }>
                </Route>
            </Route>
        </Routes>
    )
}