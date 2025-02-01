import MenuPrincipal from "../paginaMenu/menu"
import styles from "./banner.module.css"

export default function Banner() {
    return (
        <>
            <MenuPrincipal />
            <section className={styles.banner}>
                <div className={styles.info}>
                    <h1>Olá, mundo!</h1>
                    <p>Meu nome é Leonardo, e desde 2023 venho construindo uma base sólida em tecnologia com o curso de Análise e Desenvolvimento de Sistemas. Atualmente, sou estagiário de Infraestrutura de TI na T-Systems Brasil, com conhecimentos em <strong>Windows Server, Linux, Docker, Bancos de Dados</strong> e <strong>Cloud Computing (AWS e Azure)</strong>. Estou em constante evolução, buscando me aprofundar cada vez mais em infraestrutura de TI para oferecer soluções eficientes e seguras.</p>
                </div>
                <div className={styles.imagem}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/06f21a161921919.63cd7887d0a70.gif" alt=""></img>
                </div>
            </section>
        </>
    )
}