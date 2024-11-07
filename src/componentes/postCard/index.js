import { Route, Routes, useParams } from "react-router-dom"
import { projetos } from '../../projetos/projeto.ts'
import Paginamodelo from "../paginaModelo"
import ReactMarkdown from "react-markdown"
import styles from './postagem.module.css'
import PaginaPadrao from "../paginaPadrao"
import Card from "../card"
import Rodape from "../rodape"

export default function PostCard() {
    const parametro = useParams()

    const post = projetos.find((post) => {
        return post.id === Number(parametro.id)
    })

    const outrosProjetos = projetos
        .filter((card) => card.id !== Number(parametro.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4)

    return (
        <>
            <Routes>
                <Route path="*" element={<PaginaPadrao />}>
                    <Route index element={
                        <Paginamodelo
                            titulo={post.titulo}
                            links={post.links}
                            tecnologia={post.tecnologias}
                            texto={post.texto}>

                            <h2>Outros projetos: </h2>
                            <ul className={styles.postsRecomendados}>
                                {outrosProjetos.map((card) => (
                                    <li key={card.id}>
                                        <Card card={card} />
                                    </li>
                                ))}
                            </ul>
                        </Paginamodelo>
                    }>
                    </Route>
                </Route>
            </Routes>
            <Rodape></Rodape>
        </>
    )
}

