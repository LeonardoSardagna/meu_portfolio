import { useNavigate } from "react-router-dom"
import "./naoencontrado.css"

export default function PagNaoEncontrada(){
    const navegacao = useNavigate();
    return (
        <>
            <div className="conteudoContainer">
                <span className="texto404">
                    <h1>404</h1>
                    <h2>Ops! Página não encontrada.</h2>
                    <p>Tem certeza de que era isso que você estava procurando? </p>
                    <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                    <div className="botaoimg">
                        <button
                            onClick={()=> navegacao(-1)}
                            >Voltar
                        </button>
                        <img src="./imagens/erro-404.gif" alt="gif do personagem rick dizendo não"></img>
                    </div>
                </span>
            </div>
        </>
    )
}